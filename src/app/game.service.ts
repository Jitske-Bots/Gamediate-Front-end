import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameURL = "https://localhost:44300/games"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameURL);
  }
}
