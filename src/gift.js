const size = 32;
export class Gift {
  constructor(x, y) {
    (this.x = x), (this.y = y), (this.size = size), (this.speed = 3);
  }
  static render(game) {
    const rnd = Math.random() * 20;
    if (rnd < 0.05) {
      const rndY = Math.floor(Math.random() * game.height);
      if (rndY >= game.height) {
        rndY - size * 2;
      }
      const gift = new Gift(game.width + size, rndY);
      game.gifts.push(gift);
    }
  }
  move(game) {
    if (!game.pauza) {
      this.x -= this.speed;
    }
  }
  static remove(game) {
    game.gifts.forEach((gift, index) => {
      if (gift.x + gift.size < 0) {
        game.gifts.splice(index, 1);
      }
    });
    // game.carrots.forEach((carrot, index) => {
    //   if (
    //     game.player.x < carrot.x + carrot.size &&
    //     game.player.x + game.player.width > carrot.x &&
    //     game.player.y < carrot.y + carrot.size &&
    //     game.player.y + game.player.height > carrot.y
    //   ) {
    //     game.player.energy = 100;
    //     game.carrots.splice(index, 1);
    //   }
    // });
  }
  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
