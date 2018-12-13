import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id', component: PlayerDetailComponent }
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
