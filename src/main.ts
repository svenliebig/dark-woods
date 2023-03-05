import { Game } from "./game";
import "./style.css";

(function() {
  const c: HTMLCanvasElement = document.querySelector("#main_canvas")!;
  c.width = 1400// document.body.clientWidth;
  c.height = 900 // document.body.clientHeight;

  window.addEventListener("resize", () => {
    // c.width = document.body.clientWidth;
    // c.height = document.body.clientHeight;
    // game.resize()
  });

  const game = new Game(c.getContext("2d")!, c.width, c.height, () => { });

  let lastTime = 0;
  function animate(currentTime: number) {
    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;

    game.update(deltaTime);
    game.draw(deltaTime);

    requestAnimationFrame(animate);
  }

  animate(0);
})();
