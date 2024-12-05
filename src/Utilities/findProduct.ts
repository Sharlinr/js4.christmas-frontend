import axios from 'axios';

export const findProduct = async (id: number) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/products/${id}`;
  const response = await axios.get(url);
  console.log('Fetched product:', response.data);
  return response.data.data;
};
