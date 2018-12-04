import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { PLAYERS } from '../mocks/mock-players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    // of = emits an Observable return (ASYNCHRONOUSLY)
    return of(PLAYERS)
  }
}
