import { Link } from 'react-router-dom';
import { IBaseProduct } from '../../Models/IBaseProduct';
import { IProduct } from '../../Models/IProduct';
import PrimaryButton from './PrimaryButton';

type CardProps = {
  product: IBaseProduct | IProduct;
  onAddToCart?: () => void;
  isDetailed?: boolean;
};

const Card = ({ product, onAddToCart, isDetailed }: CardProps) => {
  return (
    <div className={`product-card ${isDetailed ? 'detailed' : ''}`}>
      <Link to={`/products/${product.id}`}>
        <img
          src={`${import.meta.env.VITE_BASE_IMG_URL}${product.image}`} // Visa bild
          alt={product.name}
          className='product-image'
        />
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>
      </Link>

      {isDetailed && (
        <>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>
        </>
      )}

      {!isDetailed && onAddToCart && (
        <PrimaryButton onClick={() => onAddToCart(product as IBaseProduct)}>
          Add to cart
        </PrimaryButton>
      )}
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
