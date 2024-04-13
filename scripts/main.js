const lib = require("soundlib");

Events.on(ClientLoadEvent, () => {
    Vars.tree.loadMusic("research").setLooping(true);
    Vars.tree.loadMusic("database").setLooping(true);
    Vars.ui.research.shown(() => {
        Vars.tree.loadMusic("research").play();
    });
    
    Vars.ui.research.hidden(() => {
        Vars.tree.loadMusic("research").stop();
    });

    Vars.ui.database.shown(() => {
        Vars.tree.loadMusic("database").play();
    });
    
    Vars.ui.database.hidden(() => {
        Vars.tree.loadMusic("database").stop();
    });
})

Events.on(WinEvent, winner => {
        const mySound2 = lib.loadMusic("win");
        mySound2.play();
        Vars.ui.restart.hidden(() => {
            Vars.tree.loadMusic("win").stop();
     });
})
Events.on(LoseEvent, winner => {
        const mySound = lib.loadMusic("lose");
        mySound.play();
        Vars.ui.restart.hidden(() => {
            Vars.tree.loadMusic("lose").stop();
     });
})


  // sector captured = win
Events.on(SectorCaptureEvent, event => {
    const mySound = lib.loadMusic("win").play();
  })
  