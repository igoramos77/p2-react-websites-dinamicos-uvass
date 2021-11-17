import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import HeaderInfo  from "../../components/HeaderInfo";

import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import CategoryMenu from '../../components/CategoryMenu';

import { Container, CategoriesGrid, ProductsGrid } from './styles';
import ProductCard from '../../components/ProductCard';

interface ICategoriesProps {
  id: number;
  image_url: string;
  name: string;
  slug: string;
  description: string;
  administrator?: null;
}

interface IProdutcsProps {
  id: number;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
  update_at: string;
  unity_value: number;
  categoryList?: {
    id: number;
    image_url: string;
    name: string;
    slug: string;
    description: string;
  }[];
}

const Dashboard: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<ICategoriesProps[]>();
  const [products, setProducts] = useState<IProdutcsProps[]>();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get('/category/');

        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get('/product/');

        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return(
    <Container>
      <HeaderInfo supTitle="Página Inicial" title="Departamentos" margin="2rem 0 1rem 0" to="/pagina2" showSendButton={false} />

      <CategoriesGrid>
        {loading && <Loader isFixed={false} zIndex={99999999} />}
        {categories?.map((category, index) => (
          <CategoryMenu key={index} category={category.name} to={category.slug}>
            <img src={category.image_url} alt={category.description} />
          </CategoryMenu>
        ))}
      </CategoriesGrid>

      <HeaderInfo supTitle="" title="Últimos produtos" margin="3rem 0 2rem 0" to="/pagina2" showSendButton={false} />

      <ProductsGrid>
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            unity_value={product.unity_value}
            image_url={product.image_url}
          />
        ))}
      </ProductsGrid>

      <ContentGrid>
        <Footer />
      </ContentGrid>
    </Container>
  );
}

export default Dashboard;
