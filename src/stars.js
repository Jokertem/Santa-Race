const starIMG = new Image();
starIMG.src = "asstets/start.png";

const max = 6;

export class Star {
  constructor(x, y) {
    (this.x = x), (this.y = y);
    this.size = 32;
    this.speed = 3;
  }
  move(game) {
    if (!game.pauza) {
      this.x -= this.speed;
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
    game.stars.forEach((star, index) => {
      if (
        game.player.x < star.x + star.size &&
        game.player.x + game.player.width > star.x &&
        game.player.y < star.y + star.size &&
        game.player.y + game.player.height > star.y
      ) {
        game.stars.splice(index, 1);
        game.player.points++;
      }
    });
  }

  static draw(ctx, game) {
    game.stars.forEach((star, index) => {
      ctx.drawImage(starIMG, star.x, star.y, star.size, star.size);
    });
  }
}
