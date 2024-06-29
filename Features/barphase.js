import Config from "../Config"

register("step", runCommandOnIronBars);

let lastX = Player.getX();
let lastZ = Player.getZ();

function runCommandOnIronBars() {
  const playerX = Player.getX();
  const playerY = Player.getY();
  const playerZ = Player.getZ();
  
  let blockX = playerX;
  let blockY = playerY;
  let blockZ = playerZ;
  
  if (playerX > lastX) {
    blockX += 1;
  } else if (playerX < lastX) {
    blockX -= 1;
  } else if (playerZ > lastZ) {
    blockZ += 1;
  } else if (playerZ < lastZ) {
    blockZ -= 1;
  }
  
  lastX = playerX;
  lastZ = playerZ;
  
  const blockInFront = World.getBlockAt(blockX, blockY, blockZ);

  
  if (Object.values(blockInFront.getType()).indexOf('minecraft:iron_bars') > -1 && Config.barPhase) {
    ChatLib.command("hc 0.7", true)
  }
}