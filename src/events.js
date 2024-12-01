import { Player } from "./player.js";
export const SetEvents = (canvas, ctx, game, scores, startButton) => {
  const SetPauza = () => {
    if (!game.start) {
      return;
    }
    game.pauza = !game.pauza;
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
        game.start = true;
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
    console.log(key);
    switch (key) {
      case 80:
        SetPauza();
        break;
      case 13:
        game.start = true;
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
    console.log(key);
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
