import { Injectable } from '@angular/core';
import { GameMatch } from '../models/game-match';
import { ApiConnectionService } from './api-connection.service';

@Injectable({
  providedIn: 'root'
})
export class GameMatchService {

  urlPrefix='/game-match';

  constructor(private apiService:ApiConnectionService) { }

  setMatchWinner(gameMatch:GameMatch){
    return this.apiService.put<GameMatch>({
      url:this.urlPrefix+'/set-match-winner',
      body:gameMatch
    })
  }

  setMatchesWinner(gameMatches:GameMatch[]){
    return this.apiService.put<GameMatch[]>({
      url:this.urlPrefix+'/set-matches-winner',
      body:gameMatches
    })
  }


}
