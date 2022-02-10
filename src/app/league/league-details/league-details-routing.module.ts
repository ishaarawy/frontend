import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDetailsComponent } from './league-details.component';

const routes: Routes = [{ path: '', component: LeagueDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueDetailsRoutingModule { }
