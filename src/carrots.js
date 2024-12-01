const size = 32;

export class Carrots {
  constructor(x, y) {
    (this.x = x), (this.y = y), (this.size = size), (this.speed = 3);
  }
  static render(game) {
    const rnd = Math.random() * 20;
    if (rnd < 0.05 && game.carrots.length === 0) {
      const rndY = Math.floor(Math.random() * game.height);
      if (rndY + size >= game.height) {
        rndY - size * 2;
      }
      const carrot = new Carrots(game.width + size, rndY);
      game.carrots.push(carrot);
    }
  }
  move(game) {
    if (!game.pauza) {
      this.x -= this.speed;
    }
  }
  static remove(game) {
    game.carrots.forEach((carrot, index) => {
      if (carrot.x + carrot.size < 0) {
        game.carrots.splice(index, 1);
      }
    });
    game.carrots.forEach((carrot, index) => {
      if (
        game.player.x < carrot.x + carrot.size &&
        game.player.x + game.player.width > carrot.x &&
        game.player.y < carrot.y + carrot.size &&
        game.player.y + game.player.height > carrot.y
      ) {
        game.player.energy = 100;
        game.carrots.splice(index, 1);
      }
    });
  }
  draw(ctx) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
