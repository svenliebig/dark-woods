import { RenderedImage } from "./rendered_image";

export abstract class RenderedSprite extends RenderedImage {
  public frameX = 0;
  public frameY = 0;
  protected abstract spriteWidth: number;
  protected abstract spriteHeight: number;

  public override draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.image,
      this.spriteWidth * this.frameX,
      this.spriteHeight * this.frameY,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
