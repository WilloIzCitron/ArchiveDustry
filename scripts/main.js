const lib = require("soundlib");

Events.on(GameOverEvent, event => {
    const mySound = lib.loadMusic("lose");
    // engine will spawn this sound at this location (X,Y)
    mySound.at(1, 1);
  })


  // sector captured = win
Events.on(SectorCaptureEvent, event => {
    const mySound = lib.loadMusic("win");
    // engine will spawn this sound at this location (X,Y)
    mySound.at(1, 1);
  })
  