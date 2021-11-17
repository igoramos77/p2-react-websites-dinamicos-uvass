import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import Layout from '../components/Layout';

import Dashboard from '../Pages/Dashboard';
import Category from '../Pages/Category';

const AppRoutes: React.FC = () => (
  <>
    <ScrollToTop>
      <Switch>
        <Layout>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/categoria/:slug" exact component={Category} />
        </Layout>
      </Switch>
    </ScrollToTop>
  </>
);

export default AppRoutes;
