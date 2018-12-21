import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Player } from '../../models/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent {

  playerCtrl = new FormControl();
  filteredPlayers$: Observable<Player[]>;
  private searchTerms = new Subject<string>();

  constructor(private playerService: PlayerService) { }

  ngOnInit() {

    this.filteredPlayers$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // it also preserves the original request order, so only the latest is kept. The rest is discarded
      switchMap((term: string) => this.playerService.searchPlayer(term)),
    );
  }

  searchPlayer(term: string): void {
    this.searchTerms.next(term);
  }


}