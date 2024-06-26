import Config from '../Config';
import { isInDungeon } from '../utils/utils';

register("chat", (name) => {
  if (Config.warpOnPlayerKick && isInDungeon()) {
    new setTimeout(() => {
      ChatLib.chat("WARPING KICKED PLAYER BACK!");
      Thread.sleep(250)
      ChatLib.command("p warp");
    }, 250);
  }
}).setChatCriteria(" ☠ ${name} disconnected from the Dungeon and became a ghost.");
