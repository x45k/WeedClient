import Config from "../Config"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded()) return;
    const pos = new BlockPos(x * 1, y * 1, z * 1);
    const enderChestBlockState = net.minecraft.init.Blocks.field_150474_ac.func_176223_P(); // Replace with the appropriate ender chest block state
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), enderChestBlockState);
};

const coordsList = [
        { x: 77, y: 221, z: 36 },
        { x: 78, y: 221, z: 36 },
        { x: 102, y: 169, z: 47 },
        { x: 55, y: 114, z: 110 },
];

register('tick', () => {
    coordsList.forEach(coords => {
        coords.forEach(coord => {
            if (!Config.clipGhostBlocks) return
            setToEnderChest(coord.x, coord.y, coord.z);
        });
    });
});
