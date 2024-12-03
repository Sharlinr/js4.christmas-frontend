import { IBaseProduct } from '../Models/IBaseProduct';
import { Link } from 'react-router-dom';
import { addToCart } from '../Utilities/addToCart';
import { useState } from 'react';

type ProductItemProps = {
  product: IBaseProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    const itemToAdd = { ...product, quantity: 1 };
    try {
      await addToCart(itemToAdd);
      setIsAdded(true);
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

      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default ProductItem;
