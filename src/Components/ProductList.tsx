import { IBaseProduct } from '../Models/IBaseProduct';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: IBaseProduct[];
  //onAddToCart: (product: IProduct) => void;
};

const ProductList = ({ products /*,onAddToCart*/ }: ProductListProps) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          //onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;
