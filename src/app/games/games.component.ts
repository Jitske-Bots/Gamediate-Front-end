import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
    animations: [
        trigger('cartBadge', [
            state('idle', style({
                opacity: '0.3',
                transform: 'scale(1)'
            })),
            state('adding', style({
                opacity: '1',
                transform: 'scale(1.3)'
            })),
            transition('idle <=> adding', animate('300ms linear')),
            transition('void => *', [
                style({transform: 'translateX(200%)'}),
                animate('300ms ease-in-out')
            ])
        ]),
        trigger('addButton', [
            state('idle', style({
                opacity: '0.3'
            })),
            state('adding', style({
                opacity: '1',
                fontWeight: 'bold'
            })),
            transition('idle <=> adding', animate('300ms linear')),
            transition('void => *', [
                style({transform: 'translateX(200%)'}),
                animate('300ms ease-in-out')
            ])
        ])
    ]
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  quantityInCart:number = 0;
  cartBadgeState:string='idle';

  constructor(private gameService: GameService, private cartService: CartService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getGames();
    console.log(this.games);

  }

  public getGames(): void {
    this.gameService.getGames()
      .subscribe(game => this.games = game);

  }
  public addToCart(game: Game) : void {
    this.quantityInCart += 1;
    this.cartService.AddToCart(game);
    game.addButtonState = 'adding';
    this.cartBadgeState = 'adding';
    this.changeDetector.detectChanges();

  }

}
