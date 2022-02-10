import { BaseEntity } from "./base-entity";
import { GameRound } from "./game-round";
import { Participant } from "./participant";

export class League extends BaseEntity{

  participants:Participant[]
  gameRounds:GameRound[]

}
