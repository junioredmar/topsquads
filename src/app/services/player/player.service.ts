import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { PLAYERS } from '../../mocks/mock-players';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    this.messageService.add('PlayerService: fetched players');
    // of = emits an Observable return (ASYNCHRONOUSLY)
    return of(PLAYERS)
  }

  getPlayer(id: number): Observable<Player> {
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(PLAYERS.find(hero => hero.id === id));
  }
}
