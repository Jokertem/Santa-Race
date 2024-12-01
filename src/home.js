const max = 3;
const size = 64;
export class Home {
  constructor(x, y) {
    (this.x = x), (this.y = y), (this.size = size);
    this.speed = 10;
  }
  static render(game) {
    if (game.homes.length < max) {
      const newHome = new Home(game.width + size, game.height - size);
      game.homes.push(newHome);
      console.log(game.homes);
    }
  }

  draw() {}
}
