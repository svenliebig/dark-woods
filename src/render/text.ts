export type RenderTextOptions = {
  fontFamily?: string;
  size?: number;
};

export function renderText(
  c: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  options: RenderTextOptions = {}
) {
  c.font = `${options?.size || 10}px ${options?.fontFamily || "Sans Serif"}`;
  c.fillStyle = "black";
  c.fillText(text, x, y);
  c.fillStyle = "white";
  c.fillText(text, x + 2, y + 2);
}
