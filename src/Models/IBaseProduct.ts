export interface IBaseProduct {
  id: number;
  name: string;
  price: number;
}

export interface ICartItem extends IBaseProduct {
  quantity: number;
}
