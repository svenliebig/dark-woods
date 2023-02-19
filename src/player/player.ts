import { Game } from "../game";
import { InputHandler } from "../input_handler";
import { renderText } from "../render/text";
import { RenderedSprite } from "../rendered_sprite";
import { StateDefinitions } from "./states/definitions";
import { IdleLeft } from "./states/idle_left";
import { IdleRight } from "./states/idle_right";
import { RunLeft } from "./states/run_left";
import { RunRight } from "./states/run_right";
import { State } from "./states/_base";

export class Player extends RenderedSprite {
  protected spriteWidth: number = 80;
  protected spriteHeight: number = 80;

  public x: number;
  public y: number;
  public width: number;
  public height: number;

  private states = new Map<StateDefinitions, State>();
  private state!: State;

  private size = 5;

  public vx = 0;
  public vy = 0;

  public weight = 40;

  constructor(private game: Game) {
    super();
    this.image.src = "/assets/player_idle.png";
    this.width = this.spriteWidth * this.size;
    this.height = this.spriteHeight * this.size;
    this.x = 50;
    this.y = game.height - this.width;

    this.states.set(StateDefinitions.IDLE_LEFT, new IdleLeft(this));
    this.states.set(StateDefinitions.IDLE_RIGHT, new IdleRight(this));
    this.states.set(StateDefinitions.RUN_RIGHT, new RunRight(this));
    this.states.set(StateDefinitions.RUN_LEFT, new RunLeft(this));

    this.setState(StateDefinitions.IDLE_RIGHT);
  }

  override update(_: number, input: InputHandler) {
    this.state.handleInput(input.lastKey);

    this.x += this.vx;
    const maxRight = this.game.width - this.width;
    if (this.x < 0) this.x = 0;
    else if (this.x > maxRight) this.x = maxRight;
  }

  setState(sd: StateDefinitions) {
    this.state = this.states.get(sd)!;
    this.state.enter();
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
  }
}
