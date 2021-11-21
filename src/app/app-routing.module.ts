import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { GamesComponent } from './games/games.component';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';

const routes: Routes = [
  { path: '', component: GamesComponent},
  { path: 'cart', component: CartComponent},
  { path: 'confirmed', component: OrderConfirmedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
