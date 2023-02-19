export enum Keys {
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
}

type KeyValues = keyof typeof Keys;

export type UserEvents = `press_${KeyValues}` | `release_${KeyValues}`;

export class InputHandler {
  public lastKey: UserEvents;

  constructor() {
    this.lastKey = "" as any;
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case Keys.ArrowLeft:
          this.lastKey = "press_ArrowLeft";
          break;
        case Keys.ArrowRight:
          this.lastKey = "press_ArrowRight";
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

        default:
          break;
      }
    });
  }
}