import { OrderItem } from "./orderItem";

export interface Order {
    accountid: number;
    totalamount: number;
    orderitems: OrderItem[];

}