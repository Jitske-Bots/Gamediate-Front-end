import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    public gamesID: number[] = [];

  constructor(private route:Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.gamesID = this.getCart();
    console.log(this.gamesID.length)
  }
  goToCart() {
    this.route.navigate(['/', 'cart']);
  }
  getCart():number[]{
    return this.cartService.getCart();
  }

}
