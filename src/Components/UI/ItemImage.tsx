type ItemImageProps = {
  image: string;
  alt: string;
};

const ItemImage = ({ image, alt }: ItemImageProps) => {
  return (
    <img
      src={`${import.meta.env.VITE_BASE_IMG_URL}${image}`}
      alt={alt}
      className='product-image'
    />
  );
};

export default ItemImage;
