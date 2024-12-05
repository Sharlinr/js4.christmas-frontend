export interface IBaseProduct {
  quantity: number;
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ICartItem extends IBaseProduct {
  quantity: number;
}
