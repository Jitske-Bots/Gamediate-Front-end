import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { CartService } from '../cart.service';
import { Game } from '../game';
import { Order } from '../order';
import { OrderItem } from '../orderItem';
import { OrderItems } from '../orderItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public games: Game[] = [];
    public totalAmount:number = 0;

  constructor(private route:Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.games = this.getCart();
    console.log(this.games.length)
  }
  public goToCart() {
    this.route.navigate(['/', 'cart']);
  }
  public getCart():Game[]{
    return this.cartService.getCart();
  }
  //wil first call addOrder, to add an order
  //then call addOrderItems, to add the orderItems to the db
  public btnPurchase(games : Game[]) :void {
    this.addOrder(this.GetTotalAmount(games))
  }
  //first makes an order
  //then gets an array of orderItems
  //the orderitems will get in the back-end the orderID
  private addOrder(total : number): void {
    var order: Order = {accountid: 1, totalamount: total}
    var orderItems: OrderItem[] = this.addOrderItems();
    this.cartService.AddOrder(order).subscribe(data => {
      console.log(data)
    });
    this.cartService.AddOrderItems(orderItems).subscribe(data =>{
      console.log(data);
    })

  }
  //ToDo: needs to be done in back-end
  public GetTotalAmount(games : Game[]) : number {
    var total:number = 0;
    games.forEach(function (value) {
      total += value.price;
    });
    return total;
  }

  //loops through games, to get the gameID's
  //makes an orderItem with the gameID and price
  //adds all orderItems to an array of orderItems
  //returns the array
  private addOrderItems():OrderItem[] {
    var orderItems: OrderItem[] = [];

    this.games = this.getCart();
    this.games.forEach(function (value) {
      var orderItem:OrderItem = {
        gameid: value.id,
        price: value.price

      };
      orderItems.push(orderItem);
    });
    return orderItems;

  }

}
