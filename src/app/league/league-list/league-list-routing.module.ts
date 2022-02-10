import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueListComponent } from './league-list.component';

const routes: Routes = [
  { path: '', component: LeagueListComponent, children:[
    { path: 'league-details', loadChildren: () => import('../league-details/league-details.module').then(m => m.LeagueDetailsModule) }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueListRoutingModule { }
