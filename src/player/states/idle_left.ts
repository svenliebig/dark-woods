import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Idle } from "./idle";

export class IdleLeft extends Idle {
  constructor(player: Player) {
    super(StateDefinitions.IDLE_LEFT, player);
  }

  override enter() {
    super.enter();
    this.player.setImageSource("/assets/player_idle_left.png");
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.RUN_LEFT);
    }
  }
}
