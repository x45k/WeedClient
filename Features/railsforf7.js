import Config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const railBlockState = net.minecraft.block.Block.func_176220_d(66);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), railBlockState);    
};

const coordsList = [
      "66, 106, 136",
      "66, 106, 135",
      "66, 106, 134",
      "66, 106, 133",
      "66, 106, 132",
      "67, 106, 132",
      "67, 106, 133",
      "67, 106, 134",
      "67, 106, 135",
      "67, 106, 136",
      "68, 106, 136",
      "68, 106, 135",
      "68, 106, 132",
      "68, 106, 133",
      "68, 106, 134",
      "69, 106, 136",
      "69, 106, 135",
      "69, 106, 134",
      "69, 106, 133",
      "69, 106, 132",
      "70, 106, 136",
      "70, 106, 135",
      "70, 106, 134",
      "70, 106, 133",
      "70, 106, 132",
      "53, 106, 139",
      "53, 106, 138",
      "54, 106, 138",
      "54, 106, 139",
      "55, 106, 138",
      "55, 106, 139",
      "55, 106, 137",
      "54, 106, 137",
      "53, 106, 137",
      "41, 106, 127",
      "42, 106, 127",
      "41, 106, 126",
      "42, 106, 128",
      "41, 106, 128",
      "20, 106, 138",
      "20, 106, 139",
      "20, 106, 140",
      "21, 106, 140",
      "23, 106, 140",
      "22, 106, 140",
      "20, 106, 137",
      "21, 106, 136",
      "20, 106, 136",
      "22, 106, 136",
      "23, 106, 136",
      "62, 106, 37",
      "63, 106, 37",
      "64, 106, 37",
      "52, 106, 137",
      "52, 106, 138",
      "52, 106, 139",
      "56, 106, 139",
      "56, 106, 138",
      "56, 106, 137",
      "56, 106, 136",
      "55, 106, 136",
      "54, 106, 136",
      "53, 106, 136",
      "52, 106, 136",
      "40, 106, 126",
      "40, 106, 127",
      "24, 106, 136",
      "24, 106, 137",
      "24, 106, 138",
      "24, 106, 139",
      "24, 106, 140",
      "22, 106, 139",
      "23, 106, 138",
      "23, 106, 139",
      "22, 106, 138",
      "22, 106, 137",
      "23, 106, 137",
      "21, 106, 137",
      "21, 106, 138",
      "21, 106, 139",
      "66, 106, 137",
      "67, 106, 137",
      "68, 106, 137",
      "69, 106, 137",
      "70, 106, 137",
      "85, 106, 42",
      "85, 106, 43",
      "85, 106, 44",
      "86, 106, 44",
      "86, 106, 43",
      "86, 106, 42",
      "87, 106, 42",
      "87, 106, 43",
      "87, 106, 44",
      "84, 106, 44",
      "84, 106, 43",
      "83, 106, 42",
      "84, 106, 42",
      "83, 106, 43",
      "83, 106, 44",
      "88, 106, 42",
      "88, 106, 43",
      "88, 106, 44",
      "88, 106, 48",
      "87, 106, 48",
      "86, 106, 48",
      "85, 106, 48",
      "84, 106, 48",
      "83, 106, 48",
      "84, 106, 46",
      "84, 106, 47",
      "83, 106, 46",
      "83, 106, 47"
];

register('tick', () => {
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
});
