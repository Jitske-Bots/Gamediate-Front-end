import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { Login } from './login';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountURL = "https://localhost:44300/account"
  private registerURL = this.accountURL + "/signup"
  private loginURL = this.accountURL + "/login"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public signUp(account:Account) : Observable<any> {
    const body = JSON.stringify(account);
    console.log(body)
    return this.http.post(this.registerURL, account, this.httpOptions);
    
  }
  public login(account:Account) : Observable<any> {
    const body = JSON.stringify(account);
    console.log(body)
    return this.http.post(this.loginURL, account, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
