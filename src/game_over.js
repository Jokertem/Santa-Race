const defPoss = 120;
export const Game_Over = (game, ctx, startButton) => {
  //Total Count

  game.player.total =
    game.player.points +
    game.player.gifts_distributed +
    game.player.distance / 2 -
    (game.player.gifts_thrown + game.player.miss_homes);
  game.player.total = Math.floor(game.player.total);
  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";

  ctx.fillText("Game Over", game.width / 2, defPoss);
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Stars ${game.player.points}`, game.width / 2, defPoss + 35);
  ctx.fillText(
    `Distance ${game.player.distance}`,
    game.width / 2,
    defPoss + 55
  );
  ctx.fillText(
    `Gifts ${game.player.gifts_distributed}`,
    game.width / 2,
    defPoss + 75
  );
  ctx.fillStyle = "red";
  ctx.fillText(
    `Miss gifts ${game.player.gifts_thrown}`,
    game.width / 2,
    defPoss + 95
  );
  ctx.fillText(
    `Miss homes ${game.player.miss_homes}`,
    game.width / 2,
    defPoss + 115
  );
  ctx.font = "32px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Total ${game.player.total}`, game.width / 2, defPoss + 150);

  if (game.player.total >= game.bestScore) {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`New Best Score`, game.width / 2, defPoss + 170);
    game.bestScore = game.player.total;
    localStorage.setItem("Santa Race Best", game.bestScore);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(
    startButton.x - startButton.borderWidth,
    startButton.y - startButton.borderWidth,
    startButton.width + startButton.borderWidth * 2,
    startButton.height + startButton.borderWidth * 2
  );
  ctx.fillStyle = "white";
  ctx.fillRect(
    startButton.x,
    startButton.y,
    startButton.width,
    startButton.height
  );

  for (let index = 0; index < startButton.width; index += 20) {
    ctx.beginPath();
    ctx.moveTo(startButton.x + index, startButton.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.lineTo(startButton.x + 20 + index, startButton.y + startButton.height);
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
  }

  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";
  ctx.fillText(
    "New Game",
    startButton.x + startButton.width / 2,
    startButton.y + startButton.height / 2
  );
};
