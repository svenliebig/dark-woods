import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export abstract class Idle extends State {
  constructor(state: StateDefinitions, protected player: Player) {
    super(state);
  }

  override enter() {
    this.player.frameY = 0;
    this.player.vx = 0;
  }
}
