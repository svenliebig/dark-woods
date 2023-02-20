export class Timer {
  private timer = 0;
  constructor(private interval: number) {}

  update(delta: number) {
    this.timer += delta;
    return this;
  }

  hasPassed() {
    return this.timer >= this.interval;
  }

  reset() {
    this.timer = 0;
    return this;
  }

  changeInterval(interval: number) {
    this.interval = interval;
  }
}

export class FPSTimer extends Timer {
  constructor(fps: number) {
    super(1000 / fps);
  }

  changeFPS(fps: number) {
    this.changeInterval(1000 / fps);
  }
}
