import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './Components/games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './Components/cart/cart.component';
import { CookieService } from 'ngx-cookie-service';
import { OrderConfirmedComponent } from './Components/order-confirmed/order-confirmed.component';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './Components/account/account.component';
import { SignalrService } from './Services/signalr.service';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ChatComponent } from './Components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    CartComponent,
    OrderConfirmedComponent,
    GameDetailComponent,
    SignupComponent,
    LoginComponent,
    AccountComponent,
    WishlistComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService,
    SignalrService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalrService) => () => signalrService.initiateSignalrConnection(),
      deps: [SignalrService],
      multi: true,
    }
  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
