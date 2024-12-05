type ItemInfoBaseProps = {
  name: string;
  price: number;
};

const ItemInfoBase = ({ name, price }: ItemInfoBaseProps) => {
  return (
    <div className='card-body'>
      <h4>{name}</h4>
      <p className='card-price'>{price} kr</p>
    </div>
  );
};

export default ItemInfoBase;
