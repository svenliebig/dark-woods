import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Idle } from "./idle";

const image = document.createElement("img");
image.src = "/assets/player_idle_left_60x60.png";

const frames = [...Array.from(new Array(18)).map((_, i) => [i, 0])];

export class IdleLeft extends Idle {
  constructor(player: Player) {
    super(StateDefinitions.IDLE_LEFT, player);
  }

  override enter() {
    super.enter();
    this.player.image = image;
    this.player.frames = frames;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.RUN_LEFT);
    } else if (input === "press_ArrowUp" || input === "press_Space") {
      this.player.setState(StateDefinitions.START_JUMP_LEFT);
    } else if (input === "press_ArrowDown") {
      this.player.setState(StateDefinitions.CROUCH);
    }
  }
}
