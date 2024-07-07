import Config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    const railBlockState = net.minecraft.block.Block.func_176220_d(20);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), railBlockState);    
};

const coordsList = [
"45, 169, 44",
"46, 169, 44",
"47, 169, 44",
"44, 169, 43",
"45, 169, 43",
"46, 169, 43",
"47, 169, 43",
"48, 169, 43",
"43, 169, 42",
"44, 169, 42",
"45, 169, 42",
"46, 169, 42",
"47, 169, 42",
"48, 169, 42",
"49, 169, 42",
"43, 169, 41",
"44, 169, 41",
"45, 169, 41",
"46, 169, 41",
"47, 169, 41",
"48, 169, 41",
"49, 169, 41",
"43, 169, 40",
"44, 169, 40",
"45, 169, 40",
"46, 169, 40",
"47, 169, 40",
"48, 169, 40",
"49, 169, 40",
"44, 169, 39",
"45, 169, 39",
"46, 169, 39",
"47, 169, 39",
"48, 169, 39",
"45, 169, 38",
"46, 169, 38",
"47, 169, 38",
"45, 169, 68",
"46, 169, 68",
"47, 169, 68",
"44, 169, 67",
"45, 169, 67",
"46, 169, 67",
"47, 169, 67",
"48, 169, 67",
"43, 169, 66",
"44, 169, 66",
"45, 169, 66",
"46, 169, 66",
"47, 169, 66",
"48, 169, 66",
"49, 169, 66",
"43, 169, 65",
"44, 169, 65",
"45, 169, 65",
"46, 169, 65",
"47, 169, 65",
"48, 169, 65",
"49, 169, 65",
"43, 169, 64",
"44, 169, 64",
"45, 169, 64",
"46, 169, 64",
"47, 169, 64",
"48, 169, 64",
"49, 169, 64",
"44, 169, 63",
"45, 169, 63",
"46, 169, 63",
"47, 169, 63",
"48, 169, 63",
"45, 169, 62",
"46, 169, 62",
"47, 169, 62"

];

register('step', () => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
