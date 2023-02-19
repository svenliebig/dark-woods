import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

export class Jump extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.JUMP);
  }

  override enter() {
    this.player.frameY = 3;
    if (this.player.onGround()) {
      this.player.vy -= 50;
    }
  }

  override handleInput(input: UserEvents): void {
    if (input === "press_ArrowRight") {
      // this.player.setState(StateDefinitions.IDLE_RIGHT);
    } else if (input === "release_ArrowLeft") {
      // this.player.setState(StateDefinitions.IDLE_LEFT);
    } else if (this.player.onGround()) {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    }
  }
}
