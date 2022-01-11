import { Component, OnInit, } from '@angular/core';
import { Game } from '../../Models/game';
import { GameService } from '../../Services/game.service';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';
import { WishlistItem } from '../../Models/wishlistItem';
import { WishlistService } from '../../Services/wishlist.service';
import { CookieService } from 'ngx-cookie-service';
import { Account } from '../../Models/account';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  animations: []

})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  wishlistItems : WishlistItem[] = [];
  account: Account = {} as Account;
  _item: WishlistItem = {} as WishlistItem;

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
      item.accountID = this.account.id;
      item.gameID = gameID;
      this.wishlistItems.push(item);
      this.wishlistService.add(item).subscribe(item => {
        this._item = item;
      });
    }
    console.log(this.account);

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
