import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export class RunRight extends State {
  constructor(private player: Player) {
    super(StateDefinitions.RUN_RIGHT);
  }

  override enter() {
    this.player.setImageSource("/assets/player_run_right.png");
    // TODO maxSpeed
    this.player.vx = 10;
  }

  handleInput(input: UserEvents) {
    if (input === "press_ArrowLeft") {
      this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (input === "release_ArrowRight") {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    }
  }
}
