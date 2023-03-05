import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

const frames = [
  [1, 0],
  [2, 0],
  [3, 0],
]

const image = document.createElement("img");
image.src = "/assets/player_jump_left_60x60.png";

export class JumpLeft extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.JUMP_LEFT);
  }

  override enter() {
    this.player.currentFrame = 0;
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];
    this.player.image = image;
    this.player.frames = frames;

    if (this.player.onGround()) {
      this.player.vy = -this.player.stats.jumpForce; 
    }
  }

  handleInput(input: UserEvents) {
    if (this.player.vx > 0) {
      this.player.setState(StateDefinitions.JUMP_RIGHT);
    }

    if (input === "press_ArrowLeft") {
      if (this.player.vx > -this.player.stats.maxAirSpeed) {
        this.player.vx -= this.player.stats.inertia 
      }
    } else if (input === "press_ArrowRight") {
      this.player.vx += this.player.stats.inertia 
    }

    if (this.player.vy > -3) {
      this.player.setState(StateDefinitions.FLOAT_LEFT);
    }
  }
}
