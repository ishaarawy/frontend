import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';
import { ApiConnectionService } from './api-connection.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  urlPrefix='/participant';

  constructor(private apiService:ApiConnectionService) { }

  create(participant:Participant){
    return this.apiService.post<Participant>({
      url:this.urlPrefix,
      body:participant
    })
  }

  getAll(){
    return this.apiService.get<Participant[]>({
      url:this.urlPrefix+'/all'
    })
  }
}
