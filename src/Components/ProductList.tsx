import { IBaseProduct } from '../Models/IBaseProduct';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: IBaseProduct[];
  onAddToCart: (product: IBaseProduct) => void;
  cartItems: IBaseProduct[];
};

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  return (
    <ul className='product-list'>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            // cartItems={cartItems}
          />
        ))
      ) : (
        <p>Inga produkter</p>
      )}
    </ul>
  );
};

export default ProductList;
