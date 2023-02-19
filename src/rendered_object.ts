import { InputHandler } from "./input_handler";

export abstract class RenderedObject {
  public abstract x: number;
  public abstract y: number;
  public abstract width: number;
  public abstract height: number;

  public abstract update(_: number, __: InputHandler): void;
  public abstract draw(ctx: CanvasRenderingContext2D): void;
}
