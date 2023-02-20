import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { Run } from "./run";
import { State } from "./_base";

const frames = [...Array.from(new Array(24)).map((_, i) => [i, 0])];

const image = document.createElement("img");
image.src = "/assets/player_run_left.png";

export class RunLeft extends Run {
  constructor(protected player: Player) {
    super(StateDefinitions.RUN_LEFT, player);
  }

  override enter() {
    super.enter();
    this.player.image = image;
    this.player.frames = frames;
    // TODO maxSpeed
    this.player.vx = -this.player.maxSpeed;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowRight") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "release_ArrowLeft") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    }
  }
}
