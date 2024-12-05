import { IBaseProduct } from '../Models/IBaseProduct';
//import { IProduct } from '../Models/IProduct';
import { Link } from 'react-router-dom';
import { addToCart } from '../Utilities/addToCart';
import { useState, useEffect } from 'react';
import PrimaryButton from './UI/PrimaryButton';
import Card from './UI/Card';

type ProductItemProps = {
  product: IBaseProduct;
  onAddToCart: (product: IBaseProduct) => void;
  //cartItems: (product: IProduct) => void;
  cartItems: IBaseProduct[];
};

const ProductItem = ({ product, onAddToCart, cartItems }: ProductItemProps) => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
  //const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState<number>(
    existingProduct ? existingProduct.quantity : 1
  );
  //const existingProduct = cartItems.find((item) => item.id === product.id);
  /*const [quantity, setQuantity] = useState(
    existingProduct ? existingProduct.quantity : 1
  );*/
  useEffect(() => {
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, [existingProduct]);

  const handleAddToCart = async () => {
    const itemToAdd = {
      ...product,
      quantity,
    };
    try {
      await addToCart(itemToAdd);
      onAddToCart(itemToAdd);
      setQuantity(quantity + 1);
      //setIsAdded(true);
    } catch (error) {
      console.error('Error adding to cart from ProductItem', error);
      //setIsAdded(false);
    }
  };

  return (
    <li className='product-item'>
      <Card product={product} onAddToCart={handleAddToCart} />
      {/*}
      <Link to={`/products/${product.id}`}>
        <img
          src={`http://localhost:3000${product.image}`} // Ensure your server serves images correctly
          alt={product.name}
          className='product-image'
        />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.price} kr</p>

      <PrimaryButton onClick={handleAddToCart}>
        {/*} Add to cart
        {isAdded ? `Add more` : 'Add to cart'}
        {existingProduct ? `Add more` : 'Add to cart'}
      </PrimaryButton>*/}
    </li>
  );
};

export default ProductItem;
