
import { UserEvents } from "../../input_handler";
import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

// we don't use 2 images right now, because the character stands up in them
const frames = [
  [15, 0],
  [16, 0],
  [17, 0],
  [18, 0],
  [18, 0], // empty
];

const image = document.createElement("img");
image.src = "/assets/player_jump_right_60x60.png";

export class JumpRecoveryRight extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.JUMP_RECOVERY_RIGHT);
  }

  override enter() {
    this.player.currentFrame = 0;
    this.player.image = image;
    this.player.frames = frames;
    this.player.fpsTimer.changeFPS(15).reset()
  }

  handleInput(input: UserEvents) {
    console.log(this.player.currentFrame, this.player.fpsTimer.hasPassed())
    if (this.player.currentFrame === 4 && this.player.fpsTimer.hasPassed()) {
      this.player.setState(StateDefinitions.IDLE_RIGHT);
    }
  }
}