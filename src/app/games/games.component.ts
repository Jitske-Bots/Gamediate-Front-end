import { Component, OnInit, } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { WishlistItem } from '../wishlistItem';
import { WishlistService } from '../wishlist.service';
import { CookieService } from 'ngx-cookie-service';
import { Account } from '../account';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]

})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  wishlistItems : WishlistItem[] = [];
  account: Account = {} as Account;
  _item: WishlistItem = {} as WishlistItem;


  isOpen = true;

  private toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private gameService: GameService, private cartService: CartService, 
    private router: Router, private wishlistService: WishlistService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);

  }

  public getGames(): void {
    this.gameService.getGames()
      .subscribe(game => this.games = game);

  }
  public addToCart(game: Game) : void {
    this.cartService.AddToCart(game);
  }
  public viewDetails(game:Game) : void {
    this.router.navigateByUrl('/detail')

  }
  //check if game is added to wishlist
  public favorited(gameID:number) : void {

  }
  //adding item to db
  public btnFavorite(gameID: number) : void {
    var item: WishlistItem = {} as WishlistItem
    var getCookie = this.getAccountCookie()
    console.log(getCookie);
    if(!getCookie) {
      this.router.navigateByUrl('/login')

    }
    else if(getCookie) {
      this.account = (JSON.parse(this.cookieService.get("user")));
      item.accountid = this.account.id;
      item.gameid = gameID;
      this.wishlistItems.push(item);
      this.wishlistService.add(item).subscribe(item => {
        this._item = item;
      });
    }
    console.log(this._item);

    
    

  }
  //get wishlistitems 
  private getWishlistItems() : void {

  }
  public getAccountCookie() : boolean {
    console.log(this.cookieService.get('user'));
    if(document.cookie.indexOf('user') == -1) {
      return false;
    }
    else {
      return true
    }

  }

}
