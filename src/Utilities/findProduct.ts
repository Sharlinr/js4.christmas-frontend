import axios from 'axios';
import { IProduct } from '../Models/IProduct';

export const findProduct = async (id: number) /*: Promise<IProduct>*/ => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/products/${id}`;
  const response = await axios.get(/*<IProduct>*/ url);
  console.log('Fetched product:', response.data);
  return response.data.data; // Returnerar produkten
};
