const speed = 10;
const max = 60;
export class Snow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 1.5;
  }

  fall() {
    this.y += speed;
  }
  static render(game) {
    if (game.snow.length + 1 <= max) {
      const rndX = Math.floor(Math.random() * game.width);
      const rndY = 0;
      const snow = new Snow(rndX, rndY);
      game.snow.push(snow);
    }
  }
  static remove(game) {
    game.snow.forEach((snow, index) => {
      if (snow.y > game.height) {
        game.snow.splice(index, 1);
      }
    });
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}
