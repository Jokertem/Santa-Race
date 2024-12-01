const gift1 = new Image();
const gift2 = new Image();
const gift3 = new Image();
const gift4 = new Image();
const gift5 = new Image();
gift1.src = "asstets/giftbox1.png";
gift2.src = "asstets/giftbox2.png";
gift3.src = "asstets/giftbox3.png";
gift4.src = "asstets/giftbox4.png";
gift5.src = "asstets/giftbox5.png";

export const GetInfo = (game, ctx) => {
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";
  ctx.fillText(`Stars: ${game.player.points}`, 60, game.height - 30);
  ctx.fillText(`Distance: ${game.player.distance}`, 200, game.height - 30);

  switch (game.giftColor) {
    case 1:
      ctx.drawImage(gift1, 300, game.height - 30 - 32 / 2, 32, 32);

      break;
    case 2:
      ctx.drawImage(gift2, 300, game.height - 30 - 32 / 2, 32, 32);

      break;
    case 3:
      ctx.drawImage(gift3, 300, game.height - 30 - 32 / 2, 32, 32);

      break;
    case 4:
      ctx.drawImage(gift4, 300, game.height - 30 - 32 / 2, 32, 32);

      break;
    case 5:
      ctx.drawImage(gift5, 300, game.height - 30 - 32 / 2, 32, 32);

      break;

    default:
      break;
  }
  ctx.fillStyle = "white";
  ctx.fillText(`X${game.player.bag}`, 360, game.height - 30);
  if (game.player.energy > 0) {
    ctx.fillStyle = "orange";
    ctx.fillRect(
      400,
      game.height - (30 + 30 / 2),
      game.player.energy * 1.5,
      30
    );
  }
};
