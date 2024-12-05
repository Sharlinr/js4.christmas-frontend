import axios from 'axios';
import { ICartItem } from '../Models/IBaseProduct';

const CART_ENDPOINT = `${import.meta.env.VITE_BASE_URL}/cart`;

// Hämta alla produkter i varukorgen
export const fetchCartItems = async (): Promise<ICartItem[]> => {
  try {
    //const response = await axios.get('http://localhost:3000/api/cart');
    const response = await axios.get(`${CART_ENDPOINT}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw new Error('Failed to fetch cart items');
  }
};

// Ta bort en produkt från varukorgen
export const removeCartItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${CART_ENDPOINT}/${id}`);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw new Error('Failed to remove item from cart');
  }
};
