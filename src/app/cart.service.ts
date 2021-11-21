import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Game } from './game';
import { Order } from './order';
import { OrderItem } from './orderItem';
import { OrderItems } from './orderItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartURL = "https://localhost:44300/cart";
  private addOrderURL = this.cartURL + "/order";
  private addOrderItemsURL = this.cartURL + "/orderItems"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private _cookieService:CookieService, private http: HttpClient) { }

  //post request
  public AddOrder(order:Order) : Observable<any>  {
    const body = JSON.stringify(order);
    console.log(body)
    return this.http.post(this.addOrderURL, order, this.httpOptions);

  }

  public AddToCart(game: Game) : void {
    var cart = this.getCart();
    cart.push(game);
    this._cookieService.set("cart", JSON.stringify(cart));

  }
  public getCart() : Game[] {
    var cart: Game[] = [];

    var jsonObject = this._cookieService.get("cart"); 
    if(jsonObject != '') {
      cart = (JSON.parse(this._cookieService.get("cart")));
      return cart;
    }
    else {
      return cart;

    }
  }
  public clearCart() : void {
    this._cookieService.delete("cart");
  }

}
