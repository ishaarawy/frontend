import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'participants', loadChildren: () => import('./participant/participant-list/participant-list.module').then(m => m.ParticipantListModule) },
{ path: 'leagues', loadChildren: () => import('./league/league-list/league-list.module').then(m => m.LeagueListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
