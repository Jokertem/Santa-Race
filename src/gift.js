const size = 32;
const giftsCount = 5;
const gift1 = new Image();
const gift2 = new Image();
const gift3 = new Image();
const gift4 = new Image();
const gift5 = new Image();
gift1.src = "asstets/gifts/giftbox1.png";
gift2.src = "asstets/gifts/giftbox2.png";
gift3.src = "asstets/gifts/giftbox3.png";
gift4.src = "asstets/gifts/giftbox4.png";
gift5.src = "asstets/gifts/giftbox5.png";

export class Gift {
  constructor(x, y, type) {
    (this.x = x), (this.y = y), (this.size = size), (this.speed = 3);
    this.color = Math.floor(Math.random() * 5 + 1);
    this.type = type;
  }
  static render(game) {
    const rnd = Math.random() * 20;
    if (rnd < 0.05) {
      const rndY = Math.floor(Math.random() * game.height - 100);
      if (rndY >= game.height) {
        rndY - size * 2;
      }
      const gift = new Gift(game.width + size, rndY, "summoned");
      game.gifts.push(gift);
    }
  }
  move(game) {
    if (!game.pauza && this.type === "summoned") {
      this.x -= this.speed;
    }

    if (!game.pauza && this.type === "droped") {
      this.y += this.speed;
    }
  }
  static remove(game) {
    game.gifts.forEach((gift, index) => {
      if (gift.x + gift.size < 0 && gift.type === "summoned") {
        game.gifts.splice(index, 1);
      }
    });
    game.gifts.forEach((gift, index) => {
      if (
        game.player.x < gift.x + gift.size &&
        game.player.x + game.player.width > gift.x &&
        game.player.y < gift.y + gift.size &&
        game.player.y + game.player.height > gift.y &&
        gift.type === "summoned"
      ) {
        game.player.bag += giftsCount;
        game.gifts.splice(index, 1);
      }
    });
    //Miss Gifts
    game.gifts.forEach((gift, index) => {
      if (gift.y > game.height && gift.type === "droped") {
        game.gifts.splice(index, 1);
        game.player.gifts_thrown++;
        console.log(game.player.gifts_thrown);
      }
    });

    //Gift Touch Homes
    for (let index = 0; index < game.gifts.length; index++) {
      const gift = game.gifts[index];
      game.homes.forEach((home, i) => {
        if (
          gift.x < home.x + home.size &&
          gift.x + gift.size > home.x &&
          gift.y < home.y + home.y &&
          gift.y + gift.size > home.y &&
          gift.type === "droped"
        ) {
          game.gifts.splice(index, 1);
          game.homes.splice(i, 1);
          game.player.gifts_distributed++;
        }
      });
    }
  }

  draw(ctx) {
    switch (this.color) {
      case 1:
        ctx.drawImage(gift1, this.x, this.y, this.size, this.size);
        break;
      case 2:
        ctx.drawImage(gift2, this.x, this.y, this.size, this.size);
        break;
      case 3:
        ctx.drawImage(gift3, this.x, this.y, this.size, this.size);
        break;
      case 4:
        ctx.drawImage(gift4, this.x, this.y, this.size, this.size);
        break;
      case 5:
        ctx.drawImage(gift5, this.x, this.y, this.size, this.size);
        break;
      default:
        console.log(this.color);
        break;
    }
  }
}
