import { IBaseProduct } from '../Models/IBaseProduct';
import { addToCart } from '../Utilities/addToCart';
import Card from './UI/Card';

type ProductItemProps = {
  product: IBaseProduct;
  onAddToCart: (product: IBaseProduct) => void;
};

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  const handleAddToCart = async () => {
    try {
      const addedItem = await addToCart({ ...product, quantity: 1 });
      if (addedItem) {
        onAddToCart(product);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <li className='product-item'>
      <Card
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        onAddToCart={handleAddToCart}
      />
    </li>
  );
};

export default ProductItem;
