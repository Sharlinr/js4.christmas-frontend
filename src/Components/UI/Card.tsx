import { Link } from 'react-router-dom';
import ItemImage from './ItemImage';
import ItemInfoBase from '../ItemInfoBase';
import PrimaryButton from './PrimaryButton';
import React from 'react';

type CardProps = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  onAddToCart?: () => void;
  isDetailed?: boolean;
  children?: React.ReactNode;
};

const Card = ({
  id,
  name,
  price,
  image,
  onAddToCart,
  //isDetailed,
  children,
}: CardProps) => {
  return (
    <div className='card'>
      <Link to={`/products/${id}`}>
        <ItemImage image={image} alt={name} />
        <ItemInfoBase name={name} price={price} />
      </Link>
      {onAddToCart && (
        <PrimaryButton onClick={onAddToCart}>Add to CART</PrimaryButton>
      )}
      {children && <div className='card-details'>{children}</div>}
    </div>
  );
};
/*const Card = ({ product, onAddToCart }: CardProps) => {
  return (
    <div className={'product-card'}>
      <Link to={`/products/${product.id}`}>
        <img
          src={`${import.meta.env.VITE_BASE_IMG_URL}${product.image}`}
          alt={product.name}
          className={'product-card-image'}
        />
      </Link>
      <div className='card-content'>
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>

        <PrimaryButton onClick={() => onAddToCart(product)}>
          Add to cart
        </PrimaryButton>
      </div>
    </div>
  );
};*/

export default Card;
