export const Start = (ctx, game, startButton) => {
  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";

  ctx.fillText("Santa Race", game.width / 2, game.height / 2 - 65);
  if (game.bestScore > 0) {
    ctx.font = "26px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(
      `Your Best Score ${game.bestScore}`,
      game.width / 2,
      game.height / 2 + 50 - 65
    );
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
    "Play",
    startButton.x + startButton.width / 2,
    startButton.y + startButton.height / 2
  );
};
