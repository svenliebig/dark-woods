import { Game } from "./game"

const l1 = new Image()
l1.src = 'assets/background/layer_1.png'

const l2 = new Image()
l2.src = 'assets/background/layer_2.png'

const l3 = new Image()
l3.src = 'assets/background/layer_3.png'

const tiles = new Image()
tiles.src = 'assets/oak_woods_tileset.png'

export class Background {
  constructor(private game: Game) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(l1, 0, 0, this.game.width, this.game.height)
    ctx.drawImage(l2, 0, 0, this.game.width, this.game.height)
    ctx.drawImage(l3, 0, 0, this.game.width, this.game.height)

    const renderedBlockSize = blockSize * 2
    for (let x = 0; (x * renderedBlockSize) < this.game.width; x += 1) {
      const s1 = x === 0 ? blocks.dry_grass.dark_bottom.left : blocks.dry_grass.dark_bottom.middle
      const variant = s1[x % s1.length]
      ctx.drawImage(tiles, variant[0] * blockSize, variant[1] * blockSize, blockSize, blockSize, x * renderedBlockSize, this.game.height - 2 * renderedBlockSize, renderedBlockSize, renderedBlockSize)

      const s2 = x === 0 ? blocks.rock.dark_right : blocks.rock.dark
      const variant2 = s2[x %  s2.length]
      ctx.drawImage(tiles, variant2[0] * blockSize, variant2[1] * blockSize, blockSize, blockSize, x * renderedBlockSize, this.game.height - renderedBlockSize, renderedBlockSize, renderedBlockSize)
    }
  }
}

const blockSize = 24

const blocks = {
  dry_grass: {
    dark_bottom: {
      left: [[0, 0]],
      middle: [[1, 0 ], [2, 0]],
      right: [[3, 0]]
    }
  },
  rock: {
    dark_right: [[0, 1]],
    dark: [
      [0, 12], [1, 12], [2, 12], [3, 12],
      [0, 13], [1, 13], [2, 13], [3, 13],
      [0, 14], [1, 14],
    ],
    dark_left: [[3, 1]],
  }
}
