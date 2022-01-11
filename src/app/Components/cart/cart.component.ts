import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { CartService } from '../../Services/cart.service';
import { Game } from '../../Models/game';
import { Order } from '../../Models/order';
import { OrderItem } from '../../Models/orderItem';
import { OrderItems } from '../../Models/orderItems';
import { Account } from '../../Models/account';
import { OrderData } from 'src/app/mock-data/orderData';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public games: Game[] = [];
    public totalAmount: number = 0;
    newOrder: Order = {} as Order; 
    newOrderItems: OrderItem[] = {} as OrderItem[]
    public account : Account = {} as Account;
    public Orders : Order[] = {} as Order[];

  constructor(private route:Router, private cartService: CartService, private _cookieService:CookieService) { }

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
    if(document.cookie.indexOf('user') == -1) {
      this.route.navigateByUrl('/login')
    }
    else {
      this.account = (JSON.parse(this._cookieService.get('user')))
      this.addOrder(this.GetTotalAmount(games))
      this.cartService.clearCart();
      this.btnOrder();
    }
  }
  public addOrderTest(OrderItems : OrderItem[], total: number) : void {
    this.newOrder.accountid = this.account.id;
    this.newOrder.totalamount = total;
    this.newOrder.orderitems = OrderItems;
    this.Orders.push(this.newOrder);
  }

  private addOrder(total : number): void {
    this.newOrder.accountid = this.account.id;
    this.newOrder.totalamount = total;
    this.newOrder.orderitems = this.addOrderItems();
    this.cartService.AddOrder(this.newOrder).subscribe(order => {
      this.newOrder = order
    });
  }
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
  public removeFromCart(id:number) : void {
    this.cartService.removeFromCart(id);
    this.refresh();

  }
  private refresh(): void {
    window.location.reload();
}

}
