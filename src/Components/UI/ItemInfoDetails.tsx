type ItemInfoDetailsProps = {
  description: string;
  stock: number;
};

const ItemInfoDetails = ({ description, stock }: ItemInfoDetailsProps) => {
  return (
    <div className='card-description'>
      <p>{description}</p>
      <p>{stock}</p>
    </div>
  );
};

export default ItemInfoDetails;