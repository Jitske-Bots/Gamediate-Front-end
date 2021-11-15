import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Game } from './game';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartURL = "https://localhost:44300/cart"
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private _cookieService:CookieService, private http: HttpClient) { }

  //post request
  public AddOrder(order:Order) : Observable<any>  {
    const headers = {'conteent-type': 'application/json'}
    const body = JSON.stringify(order);
    console.log(body)
    return this.http.post(this.cartURL + 'games', body,{'headers':headers})

  }
  public AddToCart(game: Game) : void {
    var cart = this.getCart();
    cart.push(game);
    this._cookieService.set("cart", JSON.stringify(cart));

  }
  getCart() : Game[] {
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

}
