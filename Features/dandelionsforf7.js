import config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const railBlockState = net.minecraft.block.Block.func_176220_d(175);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), railBlockState);    
};

const coordsList = [
      "58, 133, 142",
      "58, 136, 142",
      "62, 136, 142",
      "62, 133, 142",
      "60, 135, 142"
];

register('step', () => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
