import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <div>
        <Link to='/products'>
          <button>View Products</button>
        </Link>
        <Link to='/cart'>
          <button>View Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

/*import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IBaseProduct } from '../Models/IBaseProduct';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState<IBaseProduct[]>([]); // Skapa state för att lagra produkter
  const [loading, setLoading] = useState<boolean>(true); // State för att visa laddningsindikator

  // Funktion för att hämta produkter från API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<IBaseProduct[]>(
          'http://localhost:3000/products'
        );
        setProducts(response.data); // Spara produkterna i state
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Avsluta laddningsindikatorn
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - {product.price}kr
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
*/
