import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) {
    //Constructors should do no more than set the initial local variables to simple values.
  }

  ngOnInit() {
    //Here is a good place for a component to fetch its initial data.
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.addPlayer({ name } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  delete(player: Player): void {
    this.players = this.players.filter(p => p !== player);
    this.playerService.deletePlayer(player).subscribe();
  }
}
