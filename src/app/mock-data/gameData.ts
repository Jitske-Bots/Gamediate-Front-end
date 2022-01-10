import { Game } from "../Models/game";

export class GameData {

    public getMockData() : Game[] {
        let todayDate : Date = new Date();
        const Games : Game[] = [
            {id: 1, title: 'Ori and the Blind Forest', genre: 'Platformer', 
            description: 'platform game with good story', releaseDate: todayDate, price: 14.99, 
            image: 'someimage', developer: 'dev', publisher: 'pub'},
            {id: 2, title: 'Dark Souls III', genre: 'RPG', 
            description: 'Very difficult game', releaseDate: todayDate, price: 59.99, 
            image: 'someimage', developer: 'dev', publisher: 'pub'},
            {id: 3, title: 'New World', genre: 'MMO', 
            description: 'Good game', releaseDate: todayDate, price: 39.99, 
            image: 'someimage', developer: 'dev', publisher: 'pub'}
          ];
        return Games

    }

}


