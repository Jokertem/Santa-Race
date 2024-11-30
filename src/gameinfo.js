export const GetInfo = (game, ctx) => {
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.textBaseline = "middle";
  ctx.fillText(`Stars: ${game.player.points}`, 60, game.height - 30);
  ctx.fillText(`Distance: ${game.player.distance}`, 200, game.height - 30);

  if (game.player.energy > 0) {
    ctx.fillStyle = "orange";
    ctx.fillRect(
      300,
      game.height - (30 + 30 / 2),
      game.player.energy * 1.5,
      30
    );
  }
};
