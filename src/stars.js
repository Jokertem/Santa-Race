const starIMG = new Image();
starIMG.src = "asstets/start.png";
const starSpeed = 3;
const max = 6;
export class Star {
  constructor(x, y) {
    (this.x = x), (this.y = y);
    this.size = 48;
  }
  move(game) {
    if (!game.pauza) {
      this.x -= starSpeed;
    }
  }
  static render(game) {
    if (game.stars.length < max) {
      const rndX = game.width + Math.floor(Math.random() * (1750 + 60));
      const rndY = Math.floor((Math.random() * game.height) / 2);
      const star = new Star(rndX, rndY);
      game.stars.push(star);
    }
  }

  static remove(game) {
    game.stars.forEach((star, index) => {
      if (star.x + star.size < 0) {
        game.stars.splice(index, 1);
      }
    });
  }

  static draw(ctx, game) {
    game.stars.forEach((star, index) => {
      ctx.drawImage(starIMG, star.x, star.y);
    });
  }
}
