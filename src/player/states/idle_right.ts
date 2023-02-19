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
    this.player.setImageSource("/assets/player_idle_right.png");
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.RUN_RIGHT);
    }
  }
}
