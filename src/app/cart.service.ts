import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Game } from './game';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _cookieService:CookieService) { }


  public AddOrder() : void  {
    
  }
  public AddToCart(game: Game) : void {
    var cart = this.getCart();
    cart.push(game.id);

    this._cookieService.set("cart", JSON.stringify(cart));

  }
  getCart() : number[] {
    var cart: number[] = [];

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
