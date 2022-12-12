import { product } from "@models/product/product.model";

export interface orderDetailsResponse {
  idOrderDetail: number;
  idOrder: number;
  idProduct: number;
  quantity: number;
  amount: number;
  product: product;
}