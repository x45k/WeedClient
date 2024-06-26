import Config from '../Config';
import { isInDungeon } from '../utils/utils';

register("chat", (name) => {
  if (Config.warpOnPlayerKick && isInDungeon()) {
    new Thread(() => {
      ChatLib.chat("WARPING KICKED PLAYER BACK!");
      ChatLib.command("p warp");
    }).start();
  }
}).setChatCriteria(" ☠ ${name} disconnected from the Dungeon and became a ghost.");
