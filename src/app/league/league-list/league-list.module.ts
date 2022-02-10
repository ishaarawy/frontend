import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueListRoutingModule } from './league-list-routing.module';
import { LeagueListComponent } from './league-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LeagueListComponent
  ],
  imports: [
    CommonModule,
    LeagueListRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class LeagueListModule { }
