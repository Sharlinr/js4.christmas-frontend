import axios from 'axios';
import { IBaseProduct } from '../Models/IBaseProduct';

export const loadProducts = async (): Promise<IBaseProduct[]> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/api/products`;
  const response = await axios.get<IBaseProduct[]>(url);
  return response.data;
};
