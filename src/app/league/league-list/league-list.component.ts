import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { League } from 'src/app/models/league';
import { LeagueService } from 'src/app/services/league.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { GameRound } from 'src/app/models/game-round';
import { GameMatchService } from 'src/app/services/game-match.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {

  leagues:League[];
  displayedColumns: string[] = ['id','participants','matches','actions'];

  constructor(private leagueService:LeagueService,private gameMatchService:GameMatchService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.leagueService.getAll().pipe(first()).subscribe(res=>{
      this.leagues = res;
    })
  }

  generateNewLeague(){
    this.leagueService.generateRandom().pipe(first()).subscribe(res=>{
      this.leagues=[...this.leagues,res]
    })
  }

  closeLastRound(league:League){
    this.leagueService.closeLastRound(league).pipe(first()).subscribe(res=>{
      if(res)
        this.leagues.filter(league=>league.id==league.id)[0].gameRounds=[...res.gameRounds]
      else
        this._snackBar.open("game round is still ongoing",'',{duration:2*1000})
    })
  }

  makeThemWin(league:League){
    let onGoingGameMatches = league.gameRounds[league.gameRounds.length-1].gameMatches;
    onGoingGameMatches.forEach(gm=>gm.winner=gm.firstParticipant)
    this.gameMatchService.setMatchesWinner(onGoingGameMatches).pipe(first()).subscribe(res=>{
      if(res)
        league.gameRounds[league.gameRounds.length-1].gameMatches=[...res]
      else
        this._snackBar.open("League is already finished",'',{duration:2*1000})
    })
  }

}
