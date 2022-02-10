import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantListRoutingModule } from './participant-list-routing.module';
import { ParticipantListComponent } from './participant-list.component';
import { MatTableModule } from '@angular/material/table';
import { ParticipantAddComponent } from '../participant-add/participant-add.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ParticipantListComponent,
    ParticipantAddComponent
  ],
  imports: [
    CommonModule,
    ParticipantListRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ParticipantListModule { }
