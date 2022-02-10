import { BaseEntity } from "./base-entity";
import { GameRound } from "./game-round";
import { Participant } from "./participant";

export class GameMatch extends BaseEntity{

  firstParticipant:Participant;
  secondParticipant:Participant;
  winner:Participant;
  gameTime:Date;
  gameRound:GameRound;

}
