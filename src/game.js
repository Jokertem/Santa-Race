import { Star } from "./stars.js";
import { Snow } from "./snow.js";
import { Start } from "./start.js";
import { SetEvents } from "./events.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const ctx_Width = (canvas.width = 1100);
const ctx_Height = (canvas.height = 540);
const game = {
  width: ctx_Width,
  height: ctx_Height,
  start: false,
  pauza: false,
  stars: [],
  snow: [],
};
const scores = {
  best: 20,
  last: null,
};
const startButton = {
  x: game.width / 2 - 95,
  y: game.height / 2 + (100 - 65),
  width: 200,
  height: 50,
  borderWidth: 3,
};
const Snowflakes = () => {
  game.snow.forEach((snow) => {
    snow.fall();
    snow.draw(ctx);
  });
  Snow.render(game);
  Snow.remove(game);
};
const Stars = () => {
  game.stars.forEach((star, index) => {
    star.move(game);
  });
  Star.render(game);
  Star.draw(ctx, game);
  Star.remove(game);
};
const Game = () => {
  ctx.clearRect(0, 0, ctx_Width, ctx_Height);
  Snowflakes();
  if (!game.start) {
    Start(ctx, game, scores, startButton);
  } else {
    Stars();
  }
  requestAnimationFrame(Game);
};
Game();
SetEvents(canvas, ctx, game, scores, startButton);
