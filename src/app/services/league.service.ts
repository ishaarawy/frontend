import { Injectable } from '@angular/core';
import { League } from '../models/league';
import { Participant } from '../models/participant';
import { ApiConnectionService } from './api-connection.service';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  urlPrefix='/league';

  constructor(private apiService:ApiConnectionService) { }

  getAll(){
    return this.apiService.get<League[]>({
      url:this.urlPrefix+'/all'
    })
  }

  create(participant:Participant[]){
    return this.apiService.post<League>({
      url:this.urlPrefix,
      body:participant
    })
  }

  generateRandom(){
    return this.apiService.post<League>({
      url:this.urlPrefix+'/generate-random',
      body:null
    })
  }

  closeLastRound(league:League){
    return this.apiService.put<League>({
      url:this.urlPrefix+'/close-last-round',
      body:league
    })
  }
}
