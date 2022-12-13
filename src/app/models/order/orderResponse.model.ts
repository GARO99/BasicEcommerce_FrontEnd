import { ClientResponse } from "@models/client/clientResponse.model";
import { OrderDetailsResponse } from "./orderDetailsResponse.model";

export interface OrderResponse {
  idOrder: number;
  idclient: number;
  date: string;
  totalAmount: number;
  client: ClientResponse;
  orderDetails: OrderDetailsResponse[];
}