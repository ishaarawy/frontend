import { BaseEntity } from "./base-entity";
import { GameMatch } from "./game-match";

export class GameRound extends BaseEntity{

  gameMatches:GameMatch[]

}
