import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../Models/game';
import { CartService } from '../../Services/cart.service';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {


  constructor(private cartService: CartService) {}

  ngOnInit(): void  {
  }


}