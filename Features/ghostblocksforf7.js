import Config from "../Config"
import { isInDungeon } from '../utils/utils'
import Dungeon from "../../BloomCore/dungeons/Dungeon"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    const pos = new BlockPos(x, y, z);
    Client.getMinecraft().func_71410_x().field_71441_e.func_175698_g(pos.toMCBlock());
};

const coordsList = [
      "69, 220, 35",
      "68, 220, 35",
      "89, 167, 41",
      "88, 167, 41",
      "90, 167, 41",
      "91, 167, 40",
      "91, 167, 41",
      "92, 167, 41",
      "91, 166, 41",
      "91, 166, 40",
      "92, 166, 40",
      "92, 166, 41",
      "92, 167, 40",
      "93, 167, 40",
      "93, 167, 41",
      "94, 167, 40",
      "93, 166, 40",
      "93, 166, 41",
      "94, 167, 41",
      "95, 167, 41",
      "94, 166, 40",
      "95, 166, 40",
      "94, 166, 41",
      "95, 167, 40",
      "95, 166, 41",
      "92, 165, 41",
      "93, 165, 41",
      "94, 165, 41",
      "95, 165, 41",
      "92, 165, 40",
      "93, 165, 40",
      "94, 165, 40",
      "91, 165, 41",
      "95, 165, 40",
      "91, 165, 40",
      "96, 121, 122",
      "96, 120, 122",
      "97, 121, 122",
      "97, 120, 122",
      "96, 121, 123",
      "96, 120, 123",
      "97, 121, 123",
      "97, 120, 123",
      "96, 122, 122",
      "97, 122, 122",
      "96, 122, 123",
      "97, 122, 123",
      "18, 122, 128",
      "18, 121, 128",
      "18, 120, 128",
      "17, 122, 128",
      "17, 121, 128",
      "17, 120, 128",
      "17, 121, 129",
      "17, 122, 129",
      "18, 131, 136",
      "18, 130, 136",
      "18, 129, 136",
      "18, 129, 135",
      "17, 129, 136",
      "17, 129, 135",
      "17, 130, 136",
      "17, 130, 135",
      "17, 131, 136",
      "17, 131, 135",
      "108, 120, 109",
      "17, 120, 129",
      "87, 109, 81",
      "89, 109, 81",
      "110, 111, 82",
      "110, 111, 81",
      "110, 111, 80",
      "110, 111, 79",
      "110, 111, 78",
      "110, 111, 76",
      "110, 111, 77",
      "110, 111, 75",
      "110, 111, 74",
      "28, 111, 37",
      "51, 115, 53",
      "52, 115, 54",
      "51, 116, 53",
      "52, 116, 54",
      "51, 116, 54",
      "51, 115, 54",
      "51, 114, 54",
      "52, 114, 54",
      "51, 116, 55",
      "51, 115, 55",
      "51, 114, 55",
      "52, 114, 55",
      "52, 114, 56",
      "51, 114, 56",
      "52, 114, 57",
      "51, 114, 57",
      "57, 112, 110",
      "57, 111, 110",
      "57, 113, 111",
      "56, 113, 111",
      "56, 124, 118",
      "56, 123, 118",
      "57, 124, 118",
      "57, 123, 118",
      "56, 124, 119",
      "57, 124, 119",
      "57, 124, 120",
      "57, 123, 120",
      "58, 124, 120",
      "58, 123, 120",
      "58, 124, 119",
      "58, 123, 119",
      "58, 124, 118",
      "58, 123, 118",
      "58, 124, 121",
      "58, 123, 121",
      "58, 123, 122",
      "59, 123, 122",
      "60, 123, 122",
      "59, 124, 122",
      "60, 124, 121",
      "60, 123, 121",
      "59, 124, 121",
      "59, 123, 121",
      "60, 124, 120",
      "60, 123, 120",
      "59, 124, 120",
      "59, 123, 120",
      "60, 124, 119",
      "60, 123, 119",
      "59, 124, 119",
      "59, 123, 119",
      "58, 124, 117",
      "58, 123, 117",
      "56, 123, 117"
];

register('step', () => {
    if (!World.isLoaded() || !Config.clipGhostBlocks || !isInDungeon || Dungeon.floorNumber !== 7) return;
    coordsList.forEach(coordStr => {
        const [x, y, z] = coordStr.split(', ').map(Number);
        setToEnderChest(x, y, z);
    });
}).setFps(2);
