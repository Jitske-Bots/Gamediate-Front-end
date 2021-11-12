import { Component } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamediate-front-end';

  constructor(private router: Router, private _cookieService:CookieService) {

  }
  ngOnInit(): void {

  }

  btnClick(): void {
    this.router.navigateByUrl('/cart')
  }


}
