import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export abstract class Run extends State {
  constructor(state: StateDefinitions, protected player: Player) {
    super(state);
  }

  override enter() {
    this.player.currentFrame = 0;
    this.player.fpsTimer.changeFPS(40);
  }
}
