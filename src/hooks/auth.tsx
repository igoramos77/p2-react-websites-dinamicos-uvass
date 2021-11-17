import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../services/api';
interface IFailedRequest {
  onSuccess(token: string): void;
  onFailure(err: AxiosError): void;
}

interface User {
  id: string;
  first_name: string;
  show_name: string;
  full_name: string;
  role_name: string;
  email: string;
  birthday: string;
  avatar_url: string;
  cover_url: string;
  level: number;
  exp: number;
  current_exp: number;
  role: string;
  cpf: string;
  created_at: string;
  is_public: boolean;
  last_privacy_update: string;
  career: {
    name: string;
  };
  courses: {
    id: string;
    slug: string;
    exam_name: string;
    start_date: string;
    end_date: string;
    warranty_date: string;
    title: string;
  }[],
  forums: {
    id: string;
    slug: string;
    title: string;
  }[]
}

interface AuthState {
  token: string;
  user: User;
  refreshToken: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: User;
  isAuthenticated: boolean;
  updateUser(userData: User): void;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

let authChannel: BroadcastChannel | undefined;

// eslint-disable-next-line no-restricted-globals
if ('BroadcastChannel' in self) {
  authChannel = new BroadcastChannel('auth');
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState<User>({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('@Poxalulu:token'),
  );

  const clearStorage = () => {
    localStorage.removeItem('@Poxalulu:token');
    localStorage.removeItem('@Poxalulu:refreshToken');

    setUser({} as User);
    setIsAuthenticated(false);
  };

  const logout = useCallback(() => {
    clearStorage();

    authChannel?.postMessage('logout');

    history.push('/');
  }, [history]);

  useEffect(() => {
    if (!authChannel) {
      return;
    }

    authChannel.onmessage = event => {
      switch (event.data) {
        case 'logout':
          clearStorage();
          break;
        case 'login':
          window.location.reload();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem('@Poxalulu:token');

      if (token) {
        await api
          .get('/profile/me')
          .then(response => {
            const userData = response.data;

            setUser({
              ...userData.user,
              courses: userData.courses,
              forums: userData.forums,
            });

            setIsAuthenticated(true);
          })
          .catch(() => {
            logout();
          });
      }
    }

    loadData();
  }, [logout]);


  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post<AuthState>('sessions', {
        email,
        password,
      });

      const { token, refreshToken } = response.data;

      localStorage.setItem('@Poxalulu:token', token);
      localStorage.setItem('@Poxalulu:refreshToken', refreshToken);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      const profileResponse = await api.get('/profile/me');

      setUser({
        ...profileResponse.data.user,
        courses: profileResponse.data.courses,
        forums: profileResponse.data.forums,
      });

      setIsAuthenticated(true);

      authChannel?.postMessage('login');
    } catch (err) {
      console.log(err);
      toast.error(`🔒 E-mail/cpf ou senha inválidos!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, []);

  const updateUser = useCallback((userData: User) => {
    setUser(userData);
  }, []);

  let refreshToken = localStorage.getItem('@Poxalulu:refreshToken');
  let isRefreshing = false;
  let failedRequestsQueue: IFailedRequest[] = [];

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data?.error === 'token-expired') {
          refreshToken = localStorage.getItem('@Poxalulu:refreshToken');
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post('/refresh-tokens', { token: refreshToken })
              .then(response => {
                localStorage.setItem(
                  '@Poxalulu:token',
                  response.data.token,
                );
                localStorage.setItem(
                  '@Poxalulu:refreshToken',
                  response.data.refreshToken,
                );

                api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(response.data.token),
                );
                failedRequestsQueue = [];
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err));
                failedRequestsQueue = [];
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (newToken: string) => {
                originalConfig.headers.Authorization = `Bearer ${newToken}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }

        logout();
      }

      return Promise.reject(error);
    },
  );

  return (
    <AuthContext.Provider
      value={{ user, updateUser, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
