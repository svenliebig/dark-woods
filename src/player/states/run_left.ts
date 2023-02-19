import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export class RunLeft extends State {
  constructor(private player: Player) {
    super(StateDefinitions.RUN_LEFT);
  }

  override enter() {
    this.player.image = this.player.left;
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
