import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { FootstepsSound } from "../sounds/sound";
import { StateDefinitions } from "./definitions";
import { Run } from "./run";

const frames = [...Array.from(new Array(24)).map((_, i) => [i, 0])];

const image = document.createElement("img");
image.src = "/assets/player_run_left_60x60.png";

const stepFrames = [8, 20]

export class RunLeft extends Run {
  constructor(protected player: Player) {
    super(StateDefinitions.RUN_LEFT, player);
  }

  override enter() {
    super.enter();
    this.player.frameX = frames[0][0];
    this.player.frameY = frames[0][1];
    this.player.image = image;
    this.player.frames = frames;
    this.player.vx = -4
    this.player.fpsTimer.changeFPS(18)
  }

  handleInput(input: UserEvents) {
    if (this.player.vx > -this.player.maxSpeed) {
      this.player.vx -= this.player.stats.inertia
      this.player.fpsTimer.changeFPS(12 + this.player.vx * -2)
    } else if (this.player.vx < -this.player.maxSpeed) {
      this.player.vx = -this.player.maxSpeed
    }

    if (input === "press_ArrowRight" || input === "press_D") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "release_ArrowLeft" || input === "release_A") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
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
