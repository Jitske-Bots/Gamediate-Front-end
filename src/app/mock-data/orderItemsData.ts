import { OrderItem } from "../Models/orderItem";

export class OrderItemsData {

    public getMockData() : OrderItem[] {
        const OrderItems : OrderItem[] = [
            { gameID: 1, price: 14.99},
            { gameID: 2, price: 59.99}
          ];
        return OrderItems
    }

}