import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Jump } from "./jump";

const frames = [...Array.from(new Array(19)).map((_, i) => [i, 0])];

const image = document.createElement("img");
image.src = "/assets/player_jump_left_60x60.png";

export class JumpLeft extends Jump {
  constructor(protected player: Player) {
    super(StateDefinitions.JUMP_LEFT, player);
  }

  override enter() {
    super.enter();
    this.player.image = image;
    this.player.frames = frames;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.JUMP_RIGHT);
    }

    if (this.player.onGround()) {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    }
  }
}
