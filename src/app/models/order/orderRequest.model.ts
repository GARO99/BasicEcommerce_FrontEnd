import { OrderDetailsRequest } from "./orderDetailsRequest.model";

export interface OrderRequest {
  idOrder: number;
  idClient: number;
  date: string;
  totalAmount: number;
  orderDetails: OrderDetailsRequest[];
}