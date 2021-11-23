import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

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
    return this.http.post(this.registerURL, account, this.httpOptions);

  }
}
