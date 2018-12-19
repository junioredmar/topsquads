import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Player } from '../../models/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent implements OnInit {

  players$: Observable<Player[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.players$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // it also preserves the original request order, so only the latest is kept. The rest is discarded
      switchMap((term: string) => this.playerService.searchPlayer(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
