import { IBaseProduct } from '../Models/IBaseProduct';
import { Link } from 'react-router-dom';
import { addToCart } from '../Utilities/addToCart';
import { useState } from 'react';
import PrimaryButton from './UI/PrimaryButton';

type ProductItemProps = {
  product: IBaseProduct;
  onAddToCart: (product: IBaseProduct) => void;
  cartItems: IBaseProduct[];
};

const ProductItem = ({ product, onAddToCart }: ProductItemProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const itemToAdd = { ...product, quantity };
    try {
      await addToCart(itemToAdd);
      onAddToCart(itemToAdd);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error('Error adding to cart from ProductItem', error);
      setIsAdded(false);
    }
  };
  console.log('Rendering product:', product);
  return (
    <li className='product-item'>
      <Link to={`/products/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price} kr</p>

      <PrimaryButton onClick={handleAddToCart}>Add to cart</PrimaryButton>
    </li>
  );
};

export default ProductItem;
