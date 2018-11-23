import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  player: Player = {
    id: 1,
    name: 'Messi'
  }

  constructor() { 
    //Constructors should do no more than set the initial local variables to simple values.
  }

  ngOnInit() {
    //Here is a good place for a component to fetch its initial data. 
  }

}
