import { clientResponse } from "@models/client/clientResponse.model";
import { orderDetailsResponse } from "./orderDetailsResponse.model";

export interface orderResponse {
  idOrder: number;
  idclient: number;
  date: string;
  totalAmount: number;
  client: clientResponse;
  orderDetails: orderDetailsResponse[];
}