import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Run } from "./run";

const frames = [...Array.from(new Array(24)).map((_, i) => [i, 0])];

const image = document.createElement("img");
image.src = "/assets/player_run_right_60x60.png";

export class RunRight extends Run {
  constructor(protected player: Player) {
    super(StateDefinitions.RUN_RIGHT, player);
  }

  override enter() {
    super.enter();
    this.player.image = image;
    this.player.frames = frames;
    // TODO maxSpeed
    this.player.vx = this.player.maxSpeed;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft" || input === "press_A") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "release_ArrowRight" || input === "release_D") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    }
  }
}
