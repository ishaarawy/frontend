import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantAddComponent } from '../participant-add/participant-add.component';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  participants:Participant[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private participantService:ParticipantService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.participantService.getAll().pipe(first()).subscribe(participants=>{
      this.participants=participants
    })
  }

  openAddOverlay(){
    const dialogRef = this.dialog.open(ParticipantAddComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.participantService.create(result).pipe(first()).subscribe(res=>{
          this.participants=[...this.participants,res]
        })
    });
  }

}
