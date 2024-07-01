import Config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const enderChestBlockState = net.minecraft.init.Blocks.field_150477_bB.func_176223_P();
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), enderChestBlockState);
};

const coordsList = [
      "69, 221, 35",
      "69, 221, 34",
      "69, 221, 33",
      "69, 221, 32",
      "57, 115, 111",
      "56, 115, 111"
];

register('tick', () => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
});
