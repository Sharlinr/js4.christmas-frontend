import { IBaseProduct } from './IBaseProduct';

export interface IProduct extends IBaseProduct {
  description: string;
  stock: number;
  image?: string;
}
