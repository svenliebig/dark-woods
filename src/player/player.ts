import { Game } from "../game";
import { InputHandler } from "../input_handler";
import { renderText } from "../render/text";
import { RenderedSprite } from "../rendered_sprite";
import { FPSTimer } from "../timer";
import { StateDefinitions } from "./states/definitions";
import { IdleLeft } from "./states/idle_left";
import { IdleRight } from "./states/idle_right";
import { Jump } from "./states/jump";
import { RunLeft } from "./states/run_left";
import { RunRight } from "./states/run_right";
import { State } from "./states/_base";

export class Player extends RenderedSprite {
  protected spriteWidth: number = 80;
  protected spriteHeight: number = 80;

  public frames: Array<Array<number>> = [];
  public currentFrame: number = 0;

  public x: number;
  public y: number;
  public width: number;
  public height: number;

  private states = new Map<StateDefinitions, State>();
  private state!: State;

  private size = 5;

  public vx = 0;
  public vy = 0;

  public weight = 4;

  public speed = 0;
  public maxSpeed = 12;

  public fpsTimer = new FPSTimer(20);

  constructor(private game: Game) {
    super();
    this.width = this.spriteWidth * this.size;
    this.height = this.spriteHeight * this.size;
    this.x = 50;
    this.y = game.height - this.height;

    this.states.set(StateDefinitions.IDLE_LEFT, new IdleLeft(this));
    this.states.set(StateDefinitions.IDLE_RIGHT, new IdleRight(this));
    this.states.set(StateDefinitions.RUN_RIGHT, new RunRight(this));
    this.states.set(StateDefinitions.RUN_LEFT, new RunLeft(this));
    this.states.set(StateDefinitions.JUMP, new Jump(this));

    this.setState(StateDefinitions.IDLE_RIGHT);
  }

  override update(delta: number, input: InputHandler) {
    this.fpsTimer.update(delta);
    this.state.handleInput(input.lastKey);

    this.x += this.vx;
    this.y += this.vy;

    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }

    if (this.frames.length > 0 && this.fpsTimer.hasPassed()) {
      this.fpsTimer.reset();
      try {
        this.frameX = this.frames[this.currentFrame][0];
        this.frameY = this.frames[this.currentFrame][1];
        this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      } catch (e) {
        console.error(e);
        console.log({
          currentFrame: this.currentFrame,
          frames: this.frames,
        });
        throw e;
      }
    }

    const maxRight = this.game.width - this.width;
    if (this.x < 0) this.x = 0;
    else if (this.x > maxRight) this.x = maxRight;
  }

  setState(sd: StateDefinitions) {
    const s = this.states.get(sd);
    if (!s) {
      console.log(`state ${sd} is not registered in Player`);
    } else {
      this.state = s;
      this.state.enter();
    }
  }

  onGround() {
    return this.y >= this.game.height - this.width;
  }

  public override draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    const fontSize = 30;
    renderText(ctx, `State: ${this.state.name}`, this.game.width - 260, 10 + fontSize, {
      size: fontSize,
    });
    renderText(ctx, `VX / VY: ${this.vx} / ${this.vy}`, this.game.width - 260, 40 + fontSize, {
      size: fontSize,
    });
    renderText(ctx, `FrameX: ${this.frameX}`, this.game.width - 260, 70 + fontSize, {
      size: fontSize,
    });
    renderText(ctx, `FrameY: ${this.frameY}`, this.game.width - 260, 100 + fontSize, {
      size: fontSize,
    });
    renderText(ctx, `PlayerX: ${this.x}`, this.game.width - 260, 130 + fontSize, {
      size: fontSize,
    });
    renderText(ctx, `PlayerY: ${this.y}`, this.game.width - 260, 160 + fontSize, {
      size: fontSize,
    });
  }
}
