import { Component, OnInit, } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
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
  isOpen = true;

  private toggle() {
    this.isOpen = !this.isOpen;
  }

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
