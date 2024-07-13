import config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const railBlockState = net.minecraft.block.Block.func_176220_d(126);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), railBlockState);    
};

const coordsList = [
      "41, 125, 124",
      "40, 125, 124",
      "39, 125, 124",
      "58, 120, 122",
      "60, 120, 122",
      "57, 123, 122",
      "61, 123, 122",
      "59, 119, 123",
      "60, 119, 123",
      "68, 110, 31",
      "67, 110, 31",
      "66, 110, 31",
      "68, 110, 32",
      "57, 113, 31",
      "58, 113, 31",
      "59, 113, 31",
      "60, 113, 31",
      "61, 113, 31",
      "62, 113, 31",
      "63, 113, 31",
      "64, 113, 31",
      "65, 113, 31",
      "66, 113, 31",
      "67, 113, 31",
      "68, 113, 31",
      "68, 113, 32",
      "69, 113, 31",
      "69, 113, 32",
      "70, 113, 31",
      "70, 113, 32",
      "51, 114, 52",
      "52, 114, 52",
      "51, 114, 58",
      "52, 114, 58",
      "50, 114, 58",
      "58, 112, 31",
      "59, 112, 31",
      "60, 112, 31",
      "61, 112, 31",
      "62, 112, 31",
      "63, 112, 31",
      "64, 112, 31",
      "65, 112, 31",
      "66, 112, 31",
      "67, 112, 31",
      "68, 112, 31",
      "68, 112, 32",
      "69, 112, 31",
      "69, 112, 32",
      "70, 112, 31",
      "70, 112, 32"
];

register('step', () => {
    if (!World.isLoaded() || !config().clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
