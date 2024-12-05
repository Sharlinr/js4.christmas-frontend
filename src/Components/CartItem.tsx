import { ICartItem } from '../Models/IBaseProduct';

type CartItemProps = {
  item: ICartItem;
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.price} kr</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
