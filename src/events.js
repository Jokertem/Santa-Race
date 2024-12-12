import { Player } from "./player.js";
export const SetEvents = (
  canvas,
  ctx,
  game,

  startButton,
  resartButton
) => {
  const SetPauza = () => {
    if (!game.start) {
      return;
    }
    game.pauza = !game.pauza;
  };
  const StartGame = (game) => {
    game.start = true;
    game.player.x = 160;
    game.player.y = 80;
    game.player.points = 0;
    game.player.bag = 5;
    game.player.energy = 100;
    game.player.gifts_distributed = 0;
    game.player.gifts_thrown = 0;
    game.player.miss_homes = 0;
    game.player.distance = 0;
    game.player.total = 0;
    game.stars = [];
    game.homes = [];
    game.hazards = [];
    game.gifts = [];
    game.carrots = [];
    game.start = true;
    game.giftColor = Math.floor(Math.random() * 5 + 1);
  };
  //Starting Game
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (!game.start) {
      if (
        mousePos.x < startButton.x + startButton.width &&
        mousePos.x > startButton.x &&
        mousePos.y < startButton.y + startButton.height &&
        mousePos.y > startButton.y
      ) {
        StartGame(game);
      }
    }
    //Restart
    if (!game.start && game.lose) {
      if (
        mousePos.x < resartButton.x + resartButton.width &&
        mousePos.x > resartButton.x &&
        mousePos.y < resartButton.y + resartButton.height &&
        mousePos.y > resartButton.y
      ) {
        StartGame(game);
      } else {
        return;
      }
    } else {
      return;
    }
  });
  //Keybord down events
  window.addEventListener("keydown", (e) => {
    const key = e.keyCode;
    switch (key) {
      case 80:
        SetPauza();
        break;
      case 13:
        StartGame(game);
        break;
      case 38:
        game.player.up = true;
        break;
      case 40:
        game.player.down = true;
        break;
      case 37:
        game.player.left = true;
        break;
      case 39:
        game.player.right = true;
        break;
      case 32:
        game.player.drop(game);
        break;
      default:
        break;
    }
  });
  window.addEventListener("keyup", (e) => {
    const key = e.keyCode;

    switch (key) {
      case 38:
        game.player.up = false;
        break;
      case 40:
        game.player.down = false;
        break;
      case 37:
        game.player.left = false;
        break;
      case 39:
        game.player.right = false;
        break;

      default:
        break;
    }
  });
};
