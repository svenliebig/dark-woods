import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export abstract class Jump extends State {
  constructor(state: StateDefinitions, protected player: Player) {
    super(state);
  }

  override enter() {
    if (this.player.onGround()) {
      this.player.currentFrame = 0;
      this.player.vy -= 10;
      this.player.fpsTimer.changeFPS(13);
    }
  }
}
