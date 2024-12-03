const max = 6;
const size = 102;
const home1 = new Image();
const home2 = new Image();
const home3 = new Image();
const home4 = new Image();
const home5 = new Image();
const home6 = new Image();
home1.src = "asstets/homes/home1.png";
home2.src = "asstets/homes/home2.png";
home3.src = "asstets/homes/home3.png";
home4.src = "asstets/homes/home4.png";
home5.src = "asstets/homes/home5.png";
home6.src = "asstets/homes/home6.png";
export class Home {
  constructor(x, y) {
    (this.x = x), (this.y = y), (this.size = size);
    this.speed = 4;
    this.color = Math.floor(Math.random() * 5 + 1);
  }
  static render(game) {
    const rnd = Math.random() * 20;
    if (game.homes.length < max && rnd < 0.5) {
      const newHome = new Home(game.width + size, game.height - size);
      game.homes.push(newHome);
    }
  }
  static remove(game) {
    game.homes.forEach((home, index) => {
      if (home.x + home.size < 0) {
        game.homes.splice(index, 1);
        game.player.miss_homes++;
      }
    });
    for (let index = 0; index < game.homes.length; index++) {
      const element = game.homes[index];

      const element2 = game.homes[index + 1];
      if (element2 === undefined) {
        return;
      }
      if (
        element.x < element2.x + element2.size &&
        element.x + element.size > element2.x
      ) {
        game.homes.splice(index, 1);
        console.log("Keep distance");
      }
    }
  }
  move(game) {
    if (!game.pauza) {
      this.x -= this.speed;
    }
  }

  draw(ctx) {
    ctx.drawImage(home1, this.x, this.y, this.size, this.size);
  }
}
