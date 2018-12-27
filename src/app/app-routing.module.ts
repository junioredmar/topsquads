import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { SquadComponent } from './components/squad/squad.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'topsquads', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: '', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id', component: PlayerDetailComponent },
  { path: 'squad', component: SquadComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
