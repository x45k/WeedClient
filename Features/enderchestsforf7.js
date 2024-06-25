import Config from "../Config"

const setToEnderChest = (x, y, z) => {
    if (!World.isLoaded()) return;
    const pos = new BlockPos(x, y, z);
    const enderChestBlockState = net.minecraft.init.Blocks.field_150477_bB.func_176223_P(); // Correct ender chest block state
    Client.getMinecraft().func_71410_x().field_71441_e.func_175656_a(pos.toMCBlock(), enderChestBlockState);
};

const coordsList = [
    [
        { x: 77, y: 221, z: 35 },
        { x: 77, y: 221, z: 34 },
        { x: 77, y: 221, z: 33 },
        { x: 101, y: 169, z: 46 },
        { x: 100, y: 169, z: 46 },
        { x: 99, y: 169, z: 46 },
        { x: 56, y: 114, z: 111 }
    ]
];

register('tick', () => {
    coordsList.forEach(coords => {
        coords.forEach(coord => {
            if (!Config.clipGhostBlocks) return
            setToEnderChest(coord.x, coord.y, coord.z);
        });
    });
});
