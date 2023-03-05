import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

const frames = [
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 0],
  [11, 0],
];

const image = document.createElement("img");
image.src = "/assets/player_jump_left_60x60.png";

export class FloatLeft extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.FLOAT_LEFT);
  }

  override enter() {
    this.player.currentFrame = 0;
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];
    this.player.image = image;
    this.player.frames = frames;
    this.player.fpsTimer.changeFPS(15).reset();
  }

  handleInput(input: UserEvents) {
    if (this.player.vx > 0) {
      this.player.setState(StateDefinitions.FLOAT_RIGHT);
    }

    if (input === "press_ArrowLeft") {
      if (this.player.vx > -this.player.stats.maxAirSpeed) {
        this.player.vx -= this.player.stats.inertia 
      }
    } else if (input === "press_ArrowRight") {
      this.player.vx += this.player.stats.inertia 
    }

    if (this.player.currentFrame === frames.length - 1 && this.player.fpsTimer.hasPassed()) {
      this.player.setState(StateDefinitions.FALL_LEFT);
    }
  }
}
