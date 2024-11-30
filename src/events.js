export const SetEvents = (canvas, ctx, game, scores, startButton) => {
  const GetPauza = () => {
    if (!game.start) {
      return;
    }
    game.pauza = !game.pauza;
    console.log(game.pauza);
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
  //Keybord events
  window.addEventListener("keydown", (e) => {
    const key = e.keyCode;
    console.log(key);
    switch (key) {
      case 80:
        GetPauza();
        break;

      default:
        break;
    }
  });
};
