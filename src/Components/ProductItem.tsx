import { IBaseProduct } from '../Models/IBaseProduct';
import { Link } from 'react-router-dom';

type ProductItemProps = {
  product: IBaseProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <li className='product-item'>
      <h3>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </h3>
      <p>{product.price} kr</p>
    </li>
  );
};

export default ProductItem;
