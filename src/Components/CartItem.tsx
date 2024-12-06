import { ICartItem } from '../Models/ICartItem';

type CartItemProps = {
  item: ICartItem;
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.price} kr</p>
      <p>Antal: {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>X</button>
    </li>
  );
};

export default CartItem;
