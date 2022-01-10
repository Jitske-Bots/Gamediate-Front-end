import { Order } from "../Models/order";
import { OrderItem } from "../Models/orderItem";
import { OrderItemsData } from "./orderItemsData";

export class OrderData {

    public getMockData() : Order[] {
        const data: OrderItemsData = new OrderItemsData();
        const Orders : Order[] = [
            {   accountid: 1, totalamount: 100.99,
                orderitems: data.getMockData()
            },
            {
                accountid: 2, totalamount: 100.99,
                orderitems: data.getMockData()
            }
          ];
        return Orders
    }

}