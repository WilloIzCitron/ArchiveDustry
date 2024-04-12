const lib = require("soundlib");

Events.on(GameOverEvent, winner => {
    if(Vars.state.rules.pvp){
    if(winner.team().id == Vars.player.team().id){
        const mySound2 = lib.loadMusic("win");
        mySound2.play();
    } else {
        const mySound = lib.loadMusic("lose");
        mySound.play();
    }
    } else {
        const mySound = lib.loadMusic("lose");
        mySound.play();
    }
    
    Vars.ui.restart.hidden(() => {
        Vars.tree.loadMusic("lose").stop();
        Vars.tree.loadMusic("win").stop();
    });
  })


  // sector captured = win
Events.on(SectorCaptureEvent, event => {
    const mySound = lib.loadMusic("win").play();
  })
  