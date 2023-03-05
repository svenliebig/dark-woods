import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Idle } from "./idle";

const image = document.createElement("img");
image.src = "/assets/player_idle_right_60x60.png";

const frames = [...Array.from(new Array(18)).map((_, i) => [i, 0])];

export class IdleRight extends Idle {
  constructor(player: Player) {
    super(StateDefinitions.IDLE_RIGHT, player);
  }

  override enter() {
    super.enter();
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];
    this.player.image = image;
    this.player.frames = frames;
    this.player.fpsTimer.changeFPS(20)
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft" || input === "press_A") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "press_ArrowRight" || input === "press_D") {
      this.player.setState(StateDefinitions.RUN_RIGHT);
    } else if (input === "press_ArrowUp" || input === "press_Space") {
      this.player.setState(StateDefinitions.START_JUMP_RIGHT);
    } else if (input === "press_ArrowDown" || input === "press_S") {
      this.player.setState(StateDefinitions.CROUCH);
    }
  }
}
