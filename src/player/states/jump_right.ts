import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Jump } from "./jump";

// we don't use 2 images right now, because the character stands up in them
const frames = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [12, 0],
  [13, 0],
  [14, 0],
  [13, 0],
  [14, 0],
  [13, 0],
  [14, 0],
  [13, 0],
];

const image = document.createElement("img");
image.src = "/assets/player_jump_right_60x60.png";

export class JumpRight extends Jump {
  constructor(protected player: Player) {
    super(StateDefinitions.JUMP_RIGHT, player);
  }

  override enter() {
    super.enter();
    this.player.image = image;
    this.player.frames = frames;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.JUMP_LEFT);
    }

    if (this.player.onGround()) {
      this.player.setState(StateDefinitions.JUMP_RECOVERY_RIGHT);
    }
  }
}
