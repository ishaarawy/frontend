import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueDetailsRoutingModule } from './league-details-routing.module';
import { LeagueDetailsComponent } from './league-details.component';


@NgModule({
  declarations: [
    LeagueDetailsComponent
  ],
  imports: [
    CommonModule,
    LeagueDetailsRoutingModule
  ]
})
export class LeagueDetailsModule { }
