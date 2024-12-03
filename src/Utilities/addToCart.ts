import { ICartItem } from '../Models/IBaseProduct';
import axios from 'axios';

export const addToCart = async (item: ICartItem) => {
  const url = `${import.meta.env.VITE_BASE_URL}/cart`;
  try {
    const response = await axios.post(url, item);
    console.log('Product added to cart:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error adding to cart from addToCart:', error);
  }
};
