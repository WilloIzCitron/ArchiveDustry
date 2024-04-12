const lib = require("soundlib");

Events.on(GameOverEvent, event => {
    const mySound = lib.loadMusic("lose").play();
  })


  // sector captured = win
Events.on(SectorCaptureEvent, event => {
    const mySound = lib.loadMusic("win").play();
  })
  