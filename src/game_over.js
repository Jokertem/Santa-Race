export const Game_Over = (game, ctx, scores, startButton) => {
  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";

  ctx.fillText("Game Over", game.width / 2, game.height / 2 - 65);
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(
    `Stars ${game.player.points}`,
    game.width / 2,
    game.height / 2 - 65 + 40
  );
  ctx.fillText(
    `Distance ${game.player.distance}`,
    game.width / 2,
    game.height / 2 - 65 + 60
  );
  ctx.fillText(
    `Gifts ${game.player.gifts_distributed}`,
    game.width / 2,
    game.height / 2 - 65 + 80
  );
  ctx.fillStyle = "red";
  ctx.fillText(
    `Miss gifts ${game.player.gifts_thrown}`,
    game.width / 2,
    game.height / 2 - 65 + 100
  );
  ctx.fillText(
    `Miss homes ${game.player.miss_homes}`,
    game.width / 2,
    game.height / 2 - 65 + 120
  );
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
