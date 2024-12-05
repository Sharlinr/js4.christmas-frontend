import { ICartItem } from '../Models/IBaseProduct';
import CartItem from './CartItem';

type CartListProps = {
  cartItems: ICartItem[];
  onRemove: (id: number) => void;
};

const CartList = ({ cartItems, onRemove }: CartListProps) => {
  return (
    <ul>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </ul>
  );
};

export default CartList;
