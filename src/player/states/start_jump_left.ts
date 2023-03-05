import { Player } from "../player";
import { StateDefinitions } from "./definitions";
import { State } from "./_base";

const frames = [
  [0, 0],
  [1, 0],
  [1, 0],
];

const image = document.createElement("img");
image.src = "/assets/player_jump_left_60x60.png";

export class StartJumpLeft extends State {
  constructor(protected player: Player) {
    super(StateDefinitions.START_JUMP_LEFT);
  }

  override enter() {
    if (this.player.onGround()) {
      this.player.currentFrame = 0;
      this.player.nextImage = image;
      this.player.frames = frames;
      this.player.frameX = frames[0][0];
      this.player.frameY = frames[0][1];
      this.player.fpsTimer.changeFPS(15).reset();
    }
  }

  handleInput() {
    if (this.player.currentFrame === frames.length - 2 && this.player.fpsTimer.hasPassed()) {
      this.player.setState(StateDefinitions.JUMP_LEFT);
    }
  }
}
