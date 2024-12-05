import { IBaseProduct } from '../Models/IBaseProduct';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: IBaseProduct[];
  onAddToCart: (product: IBaseProduct) => void;
};

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  console.log('Products in ProductList:', products);
  return (
    <ul>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            cartItems={[product]}
          />
        ))
      ) : (
        <p>No available products</p>
      )}
    </ul>
  );
};

export default ProductList;
