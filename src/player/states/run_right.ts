import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { FootstepsSound } from "../sounds/sound";
import { StateDefinitions } from "./definitions";
import { Run } from "./run";

const frames = [...Array.from(new Array(24)).map((_, i) => [i, 0])];

const stepFrames = [8, 20]

const image = document.createElement("img");
image.src = "/assets/player_run_right_60x60.png";

export class RunRight extends Run {
  constructor(protected player: Player) {
    super(StateDefinitions.RUN_RIGHT, player);
  }

  override enter() {
    super.enter();
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];
    this.player.image = image;
    this.player.frames = frames;
    this.player.vx = 4
    this.player.fpsTimer.changeFPS(18)
  }

  handleInput(input: UserEvents) {
    if (this.player.vx < this.player.maxSpeed) {
      this.player.vx += this.player.stats.inertia
      this.player.fpsTimer.changeFPS(12 + this.player.vx * 2)
    } else if (this.player.vx > this.player.maxSpeed) {
      this.player.vx = this.player.maxSpeed
    }


    if (input === "press_ArrowLeft" || input === "press_A") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "release_ArrowRight" || input === "release_D") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else {
      this.sound()
    }
  }

  sound() {
    if (this.player.fpsTimer.hasPassed() && stepFrames.indexOf(this.player.currentFrame) !== -1) {
      FootstepsSound.play(Math.floor(Math.random() * FootstepsSound.max()));
    }
  }
}
