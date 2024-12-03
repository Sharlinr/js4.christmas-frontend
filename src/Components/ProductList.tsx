import { IBaseProduct } from '../Models/IBaseProduct';
import ProductItem from './ProductItem';

type ProductListProps = {
  products: IBaseProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  console.log('Products in ProductList:', products);
  return (
    <ul>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No available products</p>
      )}
    </ul>
  );
};

export default ProductList;
