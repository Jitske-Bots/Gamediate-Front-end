import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { GamesComponent } from './Components/games/games.component';
import { OrderConfirmedComponent } from './Components/order-confirmed/order-confirmed.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AccountComponent } from './Components/account/account.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ChatComponent } from './Components/chat/chat.component';

const routes: Routes = [
  { path: '', component: GamesComponent},
  { path: 'cart', component: CartComponent},
  { path: 'confirmed', component: OrderConfirmedComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'account', component:AccountComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
