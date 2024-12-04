import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../Models/IProduct';
import { findProduct } from '../Utilities/findProduct';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const productData = await findProduct(Number(id));

          setProduct(productData);
        }
      } catch (error) {
        console.error('Error fetching product', error);
        setProduct(null);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      {product.image && (
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${product.image}`}
          alt={product.name}
          style={{ maxWidth: '300px' }}
        />
      )}
      <h2>{product.name}</h2>
      <p>Beskrivning: {product.description}</p>
      <p>Pris: {product.price}</p>
      <p>Antal i lager: {product.stock}</p>
      <p>{product.description}</p>
    </>
  );
};

export default ProductDetailsPage;
