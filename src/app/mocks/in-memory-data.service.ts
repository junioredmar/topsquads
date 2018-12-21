import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const players = [
      {"id":1, "name":"Pelé","Rating":98,"Position":"CAM","ImageUrl":"https://cdn.futbin.com/content/fifa19/img/players/237067.png?v=10","Color":"form rating ut19 icon gold rare","Price":"7M ","Club":"Icons","ClubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Brazil","NationImg":"https://cdn.futbin.com/content/fifa19/img/nation/54.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","Pace":95,"Shooting":96,"Passing":93,"Dribbling":96,"Defending":60,"Physicality":76},
      {"id":2, "name":"Diego Maradona","Rating":97,"Position":"CAM","ImageUrl":"https://cdn.futbin.com/content/fifa19/img/players/190042.png?v=10","Color":"form rating ut19 icon gold rare","Price":"3.72M ","Club":"Icons","ClubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Argentina","NationImg":"https://cdn.futbin.com/content/fifa19/img/nation/52.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","Pace":92,"Shooting":93,"Passing":92,"Dribbling":97,"Defending":40,"Physicality":76},
      {"id":3, "name":"Ronaldo","Rating":96,"Position":"ST","ImageUrl":"https://cdn.futbin.com/content/fifa19/img/players/37576.png?v=10","Color":"form rating ut19 icon gold rare","Price":"9.5M ","Club":"Icons","ClubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Brazil","NationImg":"https://cdn.futbin.com/content/fifa19/img/nation/54.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","Pace":97,"Shooting":95,"Passing":81,"Dribbling":95,"Defending":45,"Physicality":76},
      {"id":4, "name":"Lionel Messi","Rating":96,"Position":"ST","ImageUrl":"https://cdn.futbin.com/content/fifa19/img/players/p100821319.png?v=10","Color":"form rating ut19 if gold rare","Price":"2.65M ","Club":"FC Barcelona","ClubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/241.png","Nation":"Argentina","NationImg":"https://cdn.futbin.com/content/fifa19/img/nation/52.png","League":"LaLiga Santander","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/53.png","Pace":90,"Shooting":93,"Passing":92,"Dribbling":98,"Defending":34,"Physicality":66},
      {"id":5, "name":"Cristiano Ronaldo","Rating":95,"Position":"ST","ImageUrl":"https://cdn.futbin.com/content/fifa19/img/players/20801.png?v=10","Color":"form rating ut19 ucl_rare gold rare","Price":"3.07M ","Club":"Juventus","ClubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/45.png","Nation":"Portugal","NationImg":"https://cdn.futbin.com/content/fifa19/img/nation/38.png","League":"Serie A TIM","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/31.png","Pace":91,"Shooting":94,"Passing":82,"Dribbling":91,"Defending":36,"Physicality":80}
    ];
    return {players: players};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(hero => hero.id)) + 1 : 11;
  }
}
