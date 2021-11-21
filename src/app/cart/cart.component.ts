import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { CookieService } from 'ngx-cookie-service';
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
    newOrder: Order = {} as Order; 
    newOrderItems: OrderItem[] = {} as OrderItem[]

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

  public btnPurchase(games : Game[]) :void {
    this.addOrder(this.GetTotalAmount(games))
    this.cartService.clearCart();
    this.btnOrder();
  }

  private addOrder(total : number): void {
    this.newOrder.accountid = 1;
    this.newOrder.totalamount = total;
    this.newOrder.orderitems = this.addOrderItems();
    this.cartService.AddOrder(this.newOrder).subscribe(order => {
      this.newOrder = order
    });
  }
  //ToDo: needs to be done in back-end
  public GetTotalAmount(games : Game[]) : number {
    var total:number = 0;
    games.forEach(function (value) {
      total += value.price;
    });
    return total;
  }
  private addOrderItems():OrderItem[] {
    var orderItems: OrderItem[] = [];

    this.games = this.getCart();
    this.games.forEach(function (value) {
      var orderItem:OrderItem = {
        gameID: value.id,
        price: value.price

      };
      orderItems.push(orderItem);
    });
    return orderItems;

  }
  private btnOrder(): void {
    this.route.navigateByUrl('/confirmed')
  }

}
