export const Start = (ctx, game, scores) => {
  ctx.font = "50px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";

  ctx.fillText("Santa Race", game.width / 2, game.height / 2 - 65);
  if (scores.best) {
    ctx.font = "26px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(
      `Your Best Score ${scores.best}`,
      game.width / 2,
      game.height / 2 + 50 - 65
    );
  }
  const startButton = {
    x: game.width / 2 - 95,
    y: game.height / 2 + (100 - 65),
    width: 200,
    height: 50,
    borderWidth: 3,
  };
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
  ctx.font = "26px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";
  ctx.fillText(
    "Play",
    startButton.x + startButton.width / 2,
    startButton.y + startButton.height / 2
  );
};
