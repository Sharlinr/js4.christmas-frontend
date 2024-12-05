import { Link } from 'react-router-dom';
import { IBaseProduct } from '../../Models/IBaseProduct';
import ItemImage from './ItemImage';
import ItemInfoBase from './ItemInfoBase';
import ItemInfoDetails from './ItemInfoDetails';
import PrimaryButton from './PrimaryButton';

type CardProps = {
  product: IBaseProduct;
  onAddToCart?: () => void;
  isDetailed?: boolean;
};

const Card = ({ product, onAddToCart, isDetailed }: CardProps) => {
  return (
    <div className='card'>
      <Link to={`/products/${product.id}`}>
        <ItemImage image={product.image} alt={product.name} />
        <ItemInfoBase name={product.name} price={product.price} />

        {/*<img
          src={`${import.meta.env.VITE_BASE_IMG_URL}${product.image}`}
          alt={product.name}
          className='product-image'
        />
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>*/}
      </Link>

      {isDetailed && <ItemInfoDetails product={product} />}

      {onAddToCart && !isDetailed && (
        <PrimaryButton onClick={() => onAddToCart(product)}>
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
