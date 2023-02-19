import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Idle } from "./idle";

export class IdleRight extends Idle {
  constructor(player: Player) {
    super(StateDefinitions.IDLE_RIGHT, player);
  }

  override enter() {
    super.enter();
    this.player.image = this.player.right;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.RUN_RIGHT);
    } else if (input === "press_ArrowUp") {
      this.player.setState(StateDefinitions.JUMP);
    } else if (input === "press_ArrowDown") {
      this.player.setState(StateDefinitions.CROUCH);
    }
  }
}
