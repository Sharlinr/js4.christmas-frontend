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
      /*try {
        const response = await axios.get('http://localhost:3000/api/cart');
        setCartItems(response.data.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }*/
    };

    fetchCart();
  }, []);

  const handleRemoveFromCart = async (id: number) => {
    try {
      await removeCartItem(id); // Använd utility-funktionen för att ta bort en produkt
      setCartItems(cartItems.filter((item) => item.id !== id)); // Uppdatera state lokalt
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
    /*try {
      await axios.delete(`http://localhost:3000/api/cart/${id}`); // Ta bort från varukorgen
      setCartItems(cartItems.filter((item) => item.id !== id)); // Uppdatera state lokalt
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }*/
  };

  return (
    <div>
      <h1>Varukorg</h1>
      <CartList cartItems={cartItems} onRemove={handleRemoveFromCart} />
    </div>
    /*<div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price} kr</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>*/
  );
};

export default CartPage;
