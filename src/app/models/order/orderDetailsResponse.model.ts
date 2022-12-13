import { Product } from "@models/product/product.model";

export interface OrderDetailsResponse {
  idOrderDetail: number;
  idOrder: number;
  idProduct: number;
  quantity: number;
  amount: number;
  product: Product;
}