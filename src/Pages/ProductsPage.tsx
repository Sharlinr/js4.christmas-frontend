import { useEffect, useState } from 'react';
import { IBaseProduct } from '../Models/IBaseProduct';
import ProductList from '../Components/ProductList';
import { loadProducts } from '../Utilities/loadProducts';

const ProductsPage = () => {
  const [products, setProducts] = useState<IBaseProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await loadProducts();
        setProducts(data); // Spara produkten i state
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products</p>
      )}
    </div>
  );
};

export default ProductsPage;
