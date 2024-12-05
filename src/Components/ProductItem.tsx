import { IBaseProduct } from '../Models/IBaseProduct';
//import { IProduct } from '../Models/IProduct';
import { Link } from 'react-router-dom';
import { addToCart } from '../Utilities/addToCart';
import { useState } from 'react';
import PrimaryButton from './UI/PrimaryButton';

type ProductItemProps = {
  product: IBaseProduct;
  onAddToCart: (product: IBaseProduct) => void;
  //cartItems: (product: IProduct) => void;
};

const ProductItem = ({
  product,
  onAddToCart /*cartItems*/,
}: ProductItemProps) => {
  const [isAdded, setIsAdded] = useState(false);
  //const [quantity, setQuantity] = useState(1);
  //const existingProduct = cartItems.find((item) => item.id === product.id);
  /*const [quantity, setQuantity] = useState(
    existingProduct ? existingProduct.quantity : 1
  );*/

  const handleAddToCart = async () => {
    const itemToAdd = { ...product, quantity: 1 };
    try {
      await addToCart(itemToAdd);
      onAddToCart(itemToAdd);
      setIsAdded(true);
    } catch (error) {
      console.error('Error adding to cart from ProductItem', error);
      setIsAdded(false);
    }
  };

  return (
    <li className='product-item'>
      <Link to={`/products/${product.id}`}>
        <img
          src={`http://localhost:3000${product.image}`} // Ensure your server serves images correctly
          alt={product.name}
          className='product-image'
        />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price} kr</p>

      <PrimaryButton onClick={handleAddToCart} disabled={isAdded}>
        Add to cart
        {isAdded ? 'Add to cart' : 'Add more'}
      </PrimaryButton>
    </li>
  );
};

export default ProductItem;
