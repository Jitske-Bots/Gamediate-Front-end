import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { CartService } from '../cart.service';
import { Game } from '../game';
import { Order } from '../order';


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
  //wil first call addOrder, to get orderID
  //then add orderItem with orderID to DB
  public btnPurchase(games : Game[]) :void {
    this.addOrder(this.GetTotalAmount(games))
  }
  //adds an order
  private addOrder(total : number): void {
    var order: Order = {accountid: 1, totalamount: 24}
    this.cartService.AddOrder(order).subscribe(data => {
      console.log(data)
    });
  }
  public GetTotalAmount(games : Game[]) : number {
    var total:number = 0;
    games.forEach(function (value) {
      total += value.price;
    });
    return total;
  }

}
