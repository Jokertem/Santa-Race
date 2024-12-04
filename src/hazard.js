const size = 48;
const hazard1 = new Image();
const hazard2 = new Image();
hazard1.src = "asstets/hazards/storm.png";
hazard2.src = "asstets/hazards/tornado.png";
export class Hazard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = Math.floor(Math.random() * 2 + 1);
    this.size = size;
  }
  static render(game) {
    const rnd = Math.random() * 20;
    if (game.hazards.length < game.max_hazards && rnd < 0.5) {
      const newHazard = new Hazard(
        game.width + size,
        Math.floor(Math.random() * game.height - 100)
      );
      game.hazards.push(newHazard);
    }
  }
  static remove(game) {
    game.hazards.forEach((hazard, index) => {
      if (hazard.x + hazard.size < 0) {
        game.hazards.splice(index, 1);
      }
    });
    game.hazards.forEach((hazard, index) => {
      if (
        game.player.x < hazard.x + hazard.size &&
        game.player.x + game.player.width > hazard.x &&
        game.player.y < hazard.y + hazard.size &&
        game.player.y + game.player.height > hazard.y
      ) {
        game.start = false;
        game.lose = true;
      }
    });
  }
  move(game) {
    if (!game.pauza) {
      this.x -= game.hazards_speed;
    }
  }

  draw(ctx) {
    switch (this.type) {
      case 1:
        ctx.drawImage(hazard1, this.x, this.y, this.size, this.size);
        break;
      case 2:
        ctx.drawImage(hazard2, this.x, this.y, this.size, this.size);
        break;

      default:
        break;
    }
  }
}
