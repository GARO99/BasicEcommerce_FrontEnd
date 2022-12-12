import { orderDetailsRequest } from "./orderDetailsRequest.model";

export interface orderRequest {
  idOrder: number;
  idClient: number;
  date: string;
  totalAmount: number;
  orderDetails: orderDetailsRequest[];
}