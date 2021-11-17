import React, { useCallback } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Button from '../Button';

import truncateString from '../../utils/truncateStrings';

import { Container, ProductCardModal } from './styles';
import Icon from '../Icon';
import { FiShoppingCart } from "react-icons/fi";

interface IProductCardProps {
  name: string;
  description?: string;
  image_url: string;
  created_at?: string;
  update_at?: string;
  unity_value: number;
}

const ProductCard: React.FC<IProductCardProps> = ({name, description, image_url, created_at, update_at, unity_value}) => {

  const handleOpenProductModal = useCallback(() => {
    let modalProduct = withReactContent(Swal);

    modalProduct.fire({
      html: (
        <ProductCardModal>
          <h1>{name}</h1>
          <div>
            <img src={image_url} alt={name} />

            <div>
              <p>Vendido e entregue por: <strong> KaBoM!</strong> | <span>Em estoque</span></p>
              <h2>{unity_value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
              <footer>
                <button><FiShoppingCart size={16} /> Comprar agora!</button>
              </footer>
            </div>

          </div>

          <h3>Descrição do produto</h3>
          <p>{description}</p>
        </ProductCardModal>
      ),
      background: '#fff',
      backdrop: 'rgba(110, 97, 198, .1)',
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      width: 600,
    });
  }, [name, image_url, description, unity_value]);

  return (
    <Container onClick={handleOpenProductModal}>
      <img src={image_url} alt={name} />
      <h3> {truncateString(name, 67)} </h3>
      <h4>{unity_value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
      <p>à vista no pix</p>
    </Container>
  );
}

export default ProductCard;
