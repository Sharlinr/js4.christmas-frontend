import { IProduct } from '../Models/IProduct';

type ProductDetailsProps = {
  product: IProduct;
};

const ProductsDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className='product-details'>
      <h1>{product.name}</h1>
      <p>Price: {product.price} kr</p>
      <p>{product.description}</p>
      <p>Saldo: {product.stock}</p>
      {product.image && (
        <img
          src={`${import.meta.env.VITE_BASE_URL}${product.image}`}
          alt={product.name}
        />
      )}
    </div>
  );
};

export default ProductsDetails;
