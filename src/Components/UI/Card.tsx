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

const Card = ({ id, name, price, image, onAddToCart, children }: CardProps) => {
  return (
    <div className='card'>
      <Link to={`/products/${id}`}>
        <ItemImage image={image} alt={name} />
        <ItemInfoBase name={name} price={price} />
      </Link>
      {onAddToCart && <PrimaryButton onClick={onAddToCart}>Köp</PrimaryButton>}
      {children && <div className='card-details'>{children}</div>}
    </div>
  );
};

export default Card;
