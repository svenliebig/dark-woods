import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Idle } from "./idle";

export class IdleLeft extends Idle {
  constructor(player: Player) {
    super(StateDefinitions.IDLE_LEFT, player);
  }

  override enter() {
    console.log(`Enter State: ${this.name}`);
    super.enter();
    this.player.currentFrame = 0;
    this.player.frames = [];
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.RUN_LEFT);
    } else if (input === "press_ArrowUp") {
      this.player.setState(StateDefinitions.JUMP);
    } else if (input === "press_ArrowDown") {
      this.player.setState(StateDefinitions.CROUCH);
    }
  }
}
