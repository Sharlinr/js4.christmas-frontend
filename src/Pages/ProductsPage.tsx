import { useEffect, useState } from 'react';
import { IBaseProduct, ICartItem } from '../Models/IBaseProduct';
import ProductList from '../Components/ProductList';
import { loadProducts } from '../Utilities/loadProducts';
import { addToCart } from '../Utilities/addToCart';

const ProductsPage = () => {
  const [products, setProducts] = useState<IBaseProduct[]>([]);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await loadProducts();
        console.log('Products loaded:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product ProductsPage:', error);
      }
    };

    fetchProducts();
  }, []);

  /*const handleAddToCart = async (product: IBaseProduct) => {
    const itemToAdd = { ...product, quantity: 1 }; // Lägg till quantity till objektet
    try {
      await addToCart(itemToAdd); // Lägg till eller uppdatera varukorgen
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
    console.log('Adding to cart:', product);
  };*/

  const handleAddToCart = (product: IBaseProduct) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Öka quantity om produkten redan finns
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]); // Lägg till ny produkt
    }
  };

  return (
    <div>
      <h1>Products</h1>

      <ProductList products={products} onAddToCart={handleAddToCart} />

      <h2>Your Cart:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} in cart
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
