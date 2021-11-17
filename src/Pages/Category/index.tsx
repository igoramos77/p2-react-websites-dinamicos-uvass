import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import ContentGrid  from "../../components/ContentGrid";
import HeaderInfo  from "../../components/HeaderInfo";
import ProductCard from '../../components/ProductCard';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import { Container, ProductsGrid, NotFound } from './styles';

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


const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProdutcsProps[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await api.get(`http://localhost:8050/category/${slug}/products`);

        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [slug]);

  return(
    <Container>
      {products?.length > 0 && (
        <HeaderInfo supTitle="Categoria" title={slug.replaceAll('-', ' ')} margin="2rem 0 1rem 0" to="/pagina2" showSendButton={false} />
      )}
      <ProductsGrid>
        {loading && <Loader isFixed={false} zIndex={99999999} />}
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            unity_value={product.unity_value}
            image_url={product.image_url}
          />
        ))}
      </ProductsGrid>
        {products?.length < 1 && (
          <NotFound>Poxa, não encontramos nenhum produto com a categoria <strong>{slug}</strong> 😢</NotFound>
        )}
      <ContentGrid>
        <Footer />
      </ContentGrid>
    </Container>
  );
}

export default Category;
