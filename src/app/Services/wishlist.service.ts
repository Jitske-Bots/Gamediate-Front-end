import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from '../Models/wishlistItem';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistURL = "https://localhost:44300/wishlist";
  private addToWishlistURL = this.wishlistURL + "/add";
  private getWishlistURL = this.wishlistURL + "/items";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  public add(wishlistItem : WishlistItem) : Observable<any> {
    const body = JSON.stringify(wishlistItem);
    console.log(body);
    return this.http.post(this.addToWishlistURL, wishlistItem, this.httpOptions);
  }
  public getWishlist(accountID : number) : Observable<any> {
    return this.http.post(this.getWishlistURL, accountID, this.httpOptions)
  }

}

