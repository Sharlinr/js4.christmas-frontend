import { IBaseProduct } from './IBaseProduct';
export interface ICartItem extends IBaseProduct {
  quantity: number;
}
