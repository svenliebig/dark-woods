import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

const frames = [
  [12, 0],
  [13, 0],
  [14, 0],
  [13, 0],
];

const image = document.createElement("img");
image.src = "/assets/player_jump_right_60x60.png";

export class FallRight extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.FALL_RIGHT);
  }

  override enter() {
    this.player.currentFrame = 0;
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];

    this.player.image = image;
    this.player.frames = frames;
  }

  handleInput(input: UserEvents) {
    if (this.player.vx < 0) {
      this.player.setState(StateDefinitions.FALL_LEFT);
    }

    if (input === "press_ArrowRight") {
      if (this.player.vx < this.player.stats.maxAirSpeed) {
        this.player.vx += this.player.stats.inertia 
      }
    } else if (input === "press_ArrowLeft") {
      this.player.vx -= this.player.stats.inertia 
    }

    if (this.player.onGround()) {
      this.player.setState(StateDefinitions.JUMP_RECOVERY_RIGHT);
    }
  }
}
