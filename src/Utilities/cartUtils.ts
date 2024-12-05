import axios from 'axios';
import { ICartItem } from '../Models/IBaseProduct';

// Hämta alla produkter i varukorgen
export const fetchCartItems = async (): Promise<ICartItem[]> => {
  try {
    const response = await axios.get('http://localhost:3000/api/cart');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw new Error('Failed to fetch cart items');
  }
};

// Ta bort en produkt från varukorgen
export const removeCartItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/api/cart/${id}`);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw new Error('Failed to remove item from cart');
  }
};
