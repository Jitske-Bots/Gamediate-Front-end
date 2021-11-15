import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService, private cartService: CartService) { }

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

}
