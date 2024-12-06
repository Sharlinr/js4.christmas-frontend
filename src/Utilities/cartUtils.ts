import axios from 'axios';
import { ICartItem } from '../Models/ICartItem';

const CART_ENDPOINT = `${import.meta.env.VITE_BASE_URL}/cart`;

export const fetchCartItems = async (): Promise<ICartItem[]> => {
  try {
    const response = await axios.get(`${CART_ENDPOINT}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw new Error('Failed to fetch cart items');
  }
};

export const removeCartItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${CART_ENDPOINT}/${id}`);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw new Error('Failed to remove item from cart');
  }
};

export const updateCartItemQuantity = async (
  id: number,
  quantity: number
): Promise<void> => {
  await axios.patch(`${CART_ENDPOINT}/${id}`, { quantity });
};
