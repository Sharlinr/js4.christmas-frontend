import { IBaseProduct } from '../Models/IBaseProduct';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: IBaseProduct[];
  onAddToCart: (product: IBaseProduct) => void;
  cartItems: IBaseProduct[];
};

const ProductList = ({
  products,
  onAddToCart,
  cartItems,
}: ProductListProps) => {
  //console.log('Products in ProductList:', products);
  return (
    <ul className='product-list'>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
          />
        ))
      ) : (
        <p>No available products</p>
      )}
    </ul>
  );
};

export default ProductList;
