import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../Models/IProduct';
import { findProduct } from '../Utilities/findProduct';
import Card from '../Components/UI/Card';
import ItemInfoDetails from '../Components/ItemInfoDetails';

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
    <div className='details-page'>
      <Card
        id={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
      >
        <ItemInfoDetails
          description={product.description}
          stock={product.stock}
        />
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
