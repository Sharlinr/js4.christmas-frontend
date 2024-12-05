import axios from 'axios';

export const loadProducts = async () => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const url = `${baseUrl}/products`;

    const response = await axios.get(url);
    console.log('Fetched products in loadProducts:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};
