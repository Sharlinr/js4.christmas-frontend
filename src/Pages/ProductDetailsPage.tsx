import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../Models/IProduct';
import { findProduct } from '../Utilities/findProduct';
import ProductsDetails from '../Components/ProductsDetails';

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
      <ProductsDetails product={product} />
    </>
  );
};

export default ProductDetailsPage;
