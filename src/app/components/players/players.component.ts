import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PLAYERS } from '../../mocks/mock-players'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;
  selectedPlayer: Player;

  constructor() { 
    //Constructors should do no more than set the initial local variables to simple values.
  }

  ngOnInit() {
    //Here is a good place for a component to fetch its initial data. 
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}
