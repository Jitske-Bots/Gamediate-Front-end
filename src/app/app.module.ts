import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    CartComponent
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
    MatIconModule
  ],
  providers: [CookieService,],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
