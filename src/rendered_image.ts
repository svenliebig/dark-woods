import { RenderedObject } from "./rendered_object";

export abstract class RenderedImage extends RenderedObject {
  protected image = new Image();

  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  public setImageSource(src: string) {
    this.image.src = src;
  }
}
