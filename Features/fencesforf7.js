import Config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const railBlockState = net.minecraft.block.Block.func_176220_d(189);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), railBlockState);    
};

const coordsList = [
      "95, 114, 121",
      "95, 115, 121",
      "97, 120, 121",
      "97, 121, 121",
      "97, 122, 121",
      "97, 123, 121",
      "97, 120, 120",
      "97, 121, 120",
      "97, 120, 119",
      "97, 121, 119",
      "97, 122, 119",
      "97, 122, 120",
      "97, 123, 120",
      "97, 123, 119",
      "19, 130, 135",
      "19, 131, 135",
      "19, 132, 135",
      "20, 130, 135",
      "21, 130, 135",
      "20, 131, 135",
      "21, 131, 135",
      "20, 132, 135",
      "21, 132, 135",
      "19, 120, 129",
      "19, 121, 129",
      "19, 122, 129",
      "20, 120, 129",
      "20, 121, 129",
      "20, 122, 129",
      "18, 120, 129",
      "18, 121, 129",
      "18, 122, 129",
      "18, 130, 135",
      "18, 131, 135",
      "97, 107, 120",
      "97, 107, 119",
      "97, 108, 120",
      "97, 108, 119",
      "97, 109, 120",
      "97, 109, 119",
      "97, 110, 120",
      "97, 110, 119",
      "97, 111, 120",
      "97, 112, 120",
      "97, 112, 119",
      "97, 111, 119",
      "97, 113, 120",
      "97, 113, 119",
      "97, 114, 120",
      "97, 114, 119",
      "97, 115, 120",
      "97, 115, 119",
      "97, 116, 120",
      "97, 116, 119",
      "97, 117, 120",
      "97, 117, 119",
      "97, 118, 120",
      "97, 118, 119",
      "97, 119, 120",
      "97, 119, 119",
      "59, 120, 139",
      "20, 119, 129",
      "20, 118, 129",
      "20, 117, 129",
      "20, 115, 129",
      "20, 113, 129",
      "20, 111, 129",
      "20, 110, 129",
      "20, 108, 129",
      "20, 107, 129",
      "20, 109, 129",
      "20, 112, 129",
      "20, 114, 129",
      "20, 116, 129"
];

register('step', () => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
