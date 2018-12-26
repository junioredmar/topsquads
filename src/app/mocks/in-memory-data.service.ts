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
      {"id":1, "name":"Pelé","rating":98,"position":"CAM","imageUrl":"https://cdn.futbin.com/content/fifa19/img/players/237067.png?v=10","color":"form rating ut19 icon gold rare","price":"7M ","Club":"Icons","clubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Brazil","nationImg":"https://cdn.futbin.com/content/fifa19/img/nation/54.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","pace":95,"shooting":96,"passing":93,"dribbling":96,"defending":60,"physicality":76},
      {"id":2, "name":"Diego Maradona","rating":97,"position":"CAM","imageUrl":"https://cdn.futbin.com/content/fifa19/img/players/190042.png?v=10","color":"form rating ut19 icon gold rare","price":"3.72M ","Club":"Icons","clubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Argentina","nationImg":"https://cdn.futbin.com/content/fifa19/img/nation/52.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","pace":92,"shooting":93,"passing":92,"dribbling":97,"defending":40,"physicality":76},
      {"id":3, "name":"Ronaldo","rating":96,"position":"ST","imageUrl":"https://cdn.futbin.com/content/fifa19/img/players/37576.png?v=10","color":"form rating ut19 icon gold rare","price":"9.5M ","Club":"Icons","clubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/112658.png","Nation":"Brazil","nationImg":"https://cdn.futbin.com/content/fifa19/img/nation/54.png","League":"Icons","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/2118.png","pace":97,"shooting":95,"passing":81,"dribbling":95,"defending":45,"physicality":76},
      {"id":4, "name":"Lionel Messi","rating":96,"position":"ST","imageUrl":"https://cdn.futbin.com/content/fifa19/img/players/p100821319.png?v=10","color":"form rating ut19 if gold rare","price":"2.65M ","Club":"FC Barcelona","clubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/241.png","Nation":"Argentina","nationImg":"https://cdn.futbin.com/content/fifa19/img/nation/52.png","League":"LaLiga Santander","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/53.png","pace":90,"shooting":93,"passing":92,"dribbling":98,"defending":34,"physicality":66},
      {"id":5, "name":"Cristiano Ronaldo","rating":95,"position":"ST","imageUrl":"https://cdn.futbin.com/content/fifa19/img/players/20801.png?v=10","color":"form rating ut19 ucl_rare gold rare","price":"3.07M ","Club":"Juventus","clubImg":"https://cdn.futbin.com/content/fifa19/img/clubs/45.png","Nation":"Portugal","nationImg":"https://cdn.futbin.com/content/fifa19/img/nation/38.png","League":"Serie A TIM","LeagueImg":"https://cdn.futbin.com/content/fifa19/img/league/31.png","pace":91,"shooting":94,"passing":82,"dribbling":91,"defending":36,"physicality":80}
    ];
    return {players: players};
  }

  // Overrides the genId method to ensure that a player always has an id.
  // If the playeres array is empty,
  // the method below returns the initial number (11).
  // if the playeres array is not empty, the method below returns the highest
  // player id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}
