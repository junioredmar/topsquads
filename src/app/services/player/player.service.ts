import { Injectable } from '@angular/core';
import { Player } from '../../models/player';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = 'api/players';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        tap(_ => this.log('fetched players')),
        catchError(this.handleError<Player[]>('getPlayers', []))
      );
  }

  getPlayer(id: number): Observable<Player> {
    const url = `${this.playersUrl}/${id}`;
    return this.http.get<Player>(url)
      .pipe(
        tap(_ => this.log(`fetched player id=${id}`)),
        catchError(this.handleError<Player>(`getPlayer id=${id}`))
      )
  }

  updatePlayer(player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions)
      .pipe(
        tap(_ => this.log(`updated player id=${player.id}`)),
        catchError(this.handleError<any>('updatePlayer'))
      )
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, httpOptions)
      .pipe(
        tap(newPlayer => this.log(`added player id=${newPlayer.id}`)),
        catchError(this.handleError<Player>('addPlayer'))
      )
  }

  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.playersUrl}/${id}`;
    return this.http.delete<Player>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted player id=${id}`)),
        catchError(this.handleError<Player>('deletePlayer'))
      )
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }
}
