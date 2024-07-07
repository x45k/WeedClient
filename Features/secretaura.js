import { C08PacketPlayerBlockPlacement, MCBlockPos } from "../../BloomCore/utils/Utils";
import Dungeon from "../../BloomCore/dungeons/Dungeon";
import Config from "../Config";

const validBlocks = new Set([
    "minecraft:chest",
    "minecraft:lever",
    "minecraft:skull",
    "minecraft:trapped_chest",
]);

const validSkullIDs = new Set([
    "26bb1a8d-7c66-31c6-82d5-a9c04c94fb02", // Wither Essence
    "edb0155f-379c-395a-9c7d-1b6005987ac8", // Redstone Key
]);

const isWithinRange = (x, y, z, playerX, playerY, playerZ, range) => {
    const dx = x - playerX;
    const dy = y - playerY;
    const dz = z - playerZ;
    const distanceSq = dx * dx + dy * dy + dz * dz;
    return distanceSq <= range * range;
};

const isValidSkull = (x, y, z) => {
    const block = World.getBlockAt(x, y, z);
    const blockEntity = block.getBlockEntity();
    if (blockEntity && blockEntity.getSkullType() === 3) {
        const ownerUniqueId = blockEntity.getOwnerUniqueId();
        if (ownerUniqueId) {
            return validSkullIDs.has(ownerUniqueId.toString());
        }
    }
    return false;
};

register("packetSent", (packet) => {
    if (!Config.secretAura) return;

    const pos = packet.func_179724_a();
    const bp = new BlockPos(pos);

    const x = bp.x;
    const y = bp.y;
    const z = bp.z;

    const playerPos = Player.getPosition();
    const playerX = playerPos.x;
    const playerY = playerPos.y;
    const playerZ = playerPos.z;

    // Check if the block is valid and within 4 blocks range
    if (isWithinRange(x, y, z, playerX, playerY, playerZ, 4)) {
        const block = World.getBlockAt(x, y, z);
        const blockName = block.type.getRegistryName();

        if (validBlocks.has(blockName)) {
            if (blockName === "minecraft:skull" && !isValidSkull(x, y, z)) return;

            // Simulate right-click on the block
            const packetPlace = new C08PacketPlayerBlockPlacement(new MCBlockPos(x, y, z), 1, Player.getInventory().getSelectedItem(), 0, 0, 0);
            dispatch(packetPlace);
        }
    }
}).setFilteredClass(C08PacketPlayerBlockPlacement);
