type ItemImageProps = {
  image: string;
  alt: string;
};

const ItemImage = ({ image, alt }: ItemImageProps) => {
  return (
    <img
      src={
        `${import.meta.env.VITE_BASE_IMG_URL}${image}` || '/images/fallback.png'
      }
      alt={alt}
      className='product-image'
      onError={(e) => {
        e.currentTarget.src = '/images/fallback.png';
      }}
    />
  );
};

export default ItemImage;
