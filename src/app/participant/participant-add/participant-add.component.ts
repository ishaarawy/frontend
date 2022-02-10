import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Participant } from 'src/app/models/participant';

@Component({
  templateUrl: './participant-add.component.html',
  styleUrls: ['./participant-add.component.scss']
})
export class ParticipantAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ParticipantAddComponent>) { }

  participantFG:FormGroup
  nameFC = new FormControl('')

  ngOnInit(): void {
    this.participantFG = new FormGroup({
      name: this.nameFC
    })
  }

  close(participant:Participant=null!){
    this.dialogRef.close(participant);
  }

}
