import { InputHandler } from "./input_handler";
import { Player } from "./player/player";
import { renderText } from "./render/text";

export class Game {
  public ctx: CanvasRenderingContext2D;
  public width: number;
  public height: number;

  private player: Player;
  private input: InputHandler;

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    private animate: Function
  ) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler();
  }

  update(deltaTime: number) {
    // update
    this.player.update(deltaTime, this.input);
  }

  draw(d: number) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(this.ctx);
    const fontSize = 30;
    renderText(this.ctx, `Last Key: ${this.input.lastKey}`, 10, 40 + fontSize, { size: fontSize });
    renderText(this.ctx, `Deltatime: ${d}ms`, 10, 70 + fontSize, { size: fontSize });
    renderText(this.ctx, `FPS: ${1000 / d}`, 10, 100 + fontSize, { size: fontSize });
  }
}
