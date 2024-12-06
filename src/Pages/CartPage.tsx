import { useState, useEffect } from 'react';
import { ICartItem } from '../Models/ICartItem';
import { fetchCartItems, removeCartItem } from '../Utilities/cartUtils';
import CartList from '../Components/CartList';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await fetchCartItems(); // Använd utility-funktionen för att hämta varukorgen
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveFromCart = async (id: number) => {
    try {
      await removeCartItem(id);
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h1>Varukorg</h1>
      <CartList cartItems={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default CartPage;
