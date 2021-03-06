import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  topPlayers: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getTopPlayers();
  }

  getTopPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(
        players => this.topPlayers = players.slice(0, 4)
      );
  }

}
