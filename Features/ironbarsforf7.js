import config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const ironBarsBlockState = net.minecraft.block.Block.func_176220_d(101);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), ironBarsBlockState);
};

const coordsList = [
      "90, 166, 41",
      "90, 165, 41",
      "89, 166, 41",
      "89, 165, 41",
      "88, 166, 41",
      "88, 165, 41"
];

register('step', () => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
