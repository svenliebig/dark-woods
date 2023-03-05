export enum Keys {
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  Space = " ",
}

type KeyValues = keyof typeof Keys;

export type UserEvents = `press_${KeyValues}` | `release_${KeyValues}`;

export class InputHandler {
  public lastKey: UserEvents;

  constructor() {
    this.lastKey = "" as any;
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case Keys.ArrowDown:
          this.lastKey = "press_ArrowDown";
          break;
        case Keys.ArrowUp:
          this.lastKey = "press_ArrowUp";
          break;
        case Keys.ArrowLeft:
          this.lastKey = "press_ArrowLeft";
          break;
        case Keys.ArrowRight:
          this.lastKey = "press_ArrowRight";
          break;
        case Keys.Space:
          this.lastKey = "press_Space";
          break;

        default:
          break;
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case Keys.ArrowLeft:
          this.lastKey = "release_ArrowLeft";
          break;
        case Keys.ArrowRight:
          this.lastKey = "release_ArrowRight";
          break;
        case Keys.ArrowDown:
          this.lastKey = "release_ArrowDown";
          break;
        case Keys.ArrowUp:
          this.lastKey = "release_ArrowUp";
          break;
        case Keys.Space:
          this.lastKey = "release_Space";
          break;
        default:
          break;
      }
    });
  }
}
