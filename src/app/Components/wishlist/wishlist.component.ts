import { Component, OnInit } from '@angular/core';
import { WishlistItem } from '../../Models/wishlistItem';
import { WishlistService } from '../../Services/wishlist.service';
import { Account } from '../../Models/account';
import { CookieService } from 'ngx-cookie-service';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public wishlist: WishlistItem[] = [];
  public account: Account = {} as Account;
  public games : Game[] = [];
  public wishlistGames : Game[] = [];
  public gameIDS: number[] = []
  public removedItem : boolean = false;
 
  constructor(private wishlistService: WishlistService, private cookieService: CookieService,
    private gameService: GameService) { }
  
  ngOnInit(): void {
    this.getGames();
    if(document.cookie.indexOf('user') != -1) {
      this.getWishlist();
    }


  }
  public removeItem(gameid : number) : void {
    var item : any = this.wishlist.find(item => item.gameID === gameid);
    this.wishlistService.removeItem(item.id).subscribe(item => {
      this.removedItem = item;
    });
    window.location.reload();

  }
  public removeItemTest(gameID: number) : void {
    var item: any = this.wishlist.find(item => item.gameID === gameID);
    this.wishlist.splice(item, 1);
  }

  private getWishlist() : void {
    this.account = (JSON.parse(this.cookieService.get("user")));
    this.wishlistService.getWishlist(this.account.id).subscribe(_wishlist => {
      this.wishlist = _wishlist;
      console.log(this.wishlist);
      this.addGamesToList();
      console.log(this.wishlistGames);
    });

  }
  public addGamesToList() : void {
    for(let i=0; i<this.wishlist.length; i++){
      for(let j=0; j <this.games.length; j++) {
        if(this.wishlist[i].gameID == this.games[j].id) {
          this.wishlistGames.push(this.games[j]);
          j = this.games.length;
        }
      }
    }
  }
  private getGames(): void {
    this.gameService.getGames()
      .subscribe(game => this.games = game);
  }
  
}
