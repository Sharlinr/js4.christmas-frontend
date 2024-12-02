type ProductDetailsProps = {
  name: string;
  price: number;
  description: string;
  stock: number;
  image?: string;
};

const ProductsDetails = ({
  name,
  price,
  description,
  stock,
  image,
}: ProductDetailsProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>{description}</p>
      <p>Stock: {stock}</p>
      {image && <img src={image} alt={name} style={{ maxWidth: '400px' }} />}
    </div>
  );
};

export default ProductsDetails;
