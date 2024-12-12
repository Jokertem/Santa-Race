import { Star } from "./stars.js";
import { Snow } from "./snow.js";
import { Start } from "./start.js";
import { SetEvents } from "./events.js";
import { Player } from "./player.js";
import { GetInfo } from "./gameinfo.js";
import { Carrots } from "./carrots.js";
import { Gift } from "./gift.js";
import { Home } from "./home.js";
import { Hazard } from "./hazard.js";
import { Game_Over } from "./game_over.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const ctx_Width = (canvas.width = 1100);
const ctx_Height = (canvas.height = 540);
const game = {
  width: ctx_Width,
  height: ctx_Height,
  start: false,
  pauza: false,
  lose: false,
  hazards_speed: 4,
  max_hazards: 5,
  stars: [],
  snow: [],
  carrots: [],
  gifts: [],
  homes: [],
  hazards: [],
  player: new Player(),
  giftColor: Math.floor(Math.random() * 5 + 1),
  saveDistance: 0,
  bestScore: 0,
};
const item = localStorage.getItem("Santa Race Best");
if (item) {
  game.bestScore = item;
}
const startButton = {
  x: game.width / 2 - 100,
  y: game.height / 2 + (100 - 65),
  width: 200,
  height: 50,
  borderWidth: 3,
};
const resartButton = {
  x: game.width / 2 - 100,
  y: game.height / 2 + (100 - 25),
  width: 200,
  height: 50,
  borderWidth: 3,
};

const SpeedUp_MaxHazardsUp = () => {
  if (game.player.distance - game.saveDistance >= 100) {
    console.log("SpeedUp");
    game.saveDistance += 100;
    game.hazards_speed += 0.4;
    game.saveDistance += 100;
    game.max_hazards++;
  }
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
const Santa = () => {
  game.player.moves(game);
  game.player.draw(ctx);
};

game.player.increaseDistance(game);
game.player.decreaseEnergy(game);
const _Carrots = () => {
  Carrots.render(game);
  Carrots.remove(game);
  game.carrots.forEach((carrot) => {
    carrot.move(game);
    carrot.draw(ctx);
  });
};
const Gifts = () => {
  Gift.render(game);
  Gift.remove(game);
  game.gifts.forEach((gift) => {
    gift.move(game);
    gift.draw(ctx);
  });
};
const Homes = () => {
  Home.render(game);
  Home.remove(game);
  game.homes.forEach((home) => {
    home.move(game);
    home.draw(ctx);
  });
};
const Hazards = () => {
  game.hazards.forEach((hazard) => {
    hazard.move(game);
    hazard.draw(ctx);
  });
  Hazard.render(game);
  Hazard.remove(game);
};
const Game = () => {
  ctx.clearRect(0, 0, ctx_Width, ctx_Height);
  Snowflakes();
  if (!game.start && !game.lose) {
    Start(ctx, game, startButton);
  } else if (game.start) {
    Stars();
    Santa();
    _Carrots();
    Gifts();
    Homes();
    Hazards();
    GetInfo(game, ctx);
    SpeedUp_MaxHazardsUp();
  }
  if (game.lose && !game.start) {
    Game_Over(game, ctx, resartButton);
  }

  requestAnimationFrame(Game);
};

Game();
SetEvents(canvas, ctx, game, startButton, resartButton);
