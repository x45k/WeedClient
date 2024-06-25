const setBlock = (blockType, x, y, z) => {
    if (!World.isLoaded()) return;
    const pos = new BlockPos(x * 1, y * 1, z * 1);
    const mc = Client.getMinecraft();
    const world = mc.func_71410_x().field_71441_e;

    switch(blockType) {
        case 'glass':
            world.func_175656_a(pos.toMCBlock(), net.minecraft.init.Blocks.field_150343_Z.func_176223_P());
            break;
        case 'enderchest':
            world.func_175656_a(pos.toMCBlock(), net.minecraft.init.Blocks.field_150474_ac.func_176223_P());
            break;
        case 'air':
            world.func_175698_g(pos.toMCBlock());
            break;
    }
}

const enderchests = {
    1: [
        { x: 77, y: 221, z: 35 },
        { x: 77, y: 221, z: 34 },
        { x: 77, y: 221, z: 33 }
    ],
    2: [
        { x: 101, y: 169, z: 46 },
        { x: 100, y: 169, z: 46 },
        { x: 99, y: 169, z: 46 }
    ],
    3: [
        { x: 56, y: 114, z: 111 }
    ]
};

const glass = {
    1: [
        { x: 77, y: 221, z: 36 },
        { x: 78, y: 221, z: 36 }
    ],
    2: [
        { x: 102, y: 169, z: 47 }
    ],
    3: [
        { x: 55, y: 114, z: 110 },
        { x: 55, y: 114, z: 111 }
    ]
};

const blocks = {
    1: [
        { x: 88, y: 220, z: 61 },
        { x: 88, y: 219, z: 61 },
        { x: 88, y: 218, z: 61 },
        { x: 88, y: 217, z: 61 },
        { x: 88, y: 216, z: 61 },
        { x: 88, y: 215, z: 61 },
        { x: 88, y: 214, z: 61 },
        { x: 88, y: 213, z: 61 },
        { x: 88, y: 212, z: 61 },
        { x: 88, y: 211, z: 61 },
        { x: 88, y: 210, z: 61 },
        { x: 77, y: 220, z: 35 },
        { x: 78, y: 220, z: 35 }
    ],
    2: [
        { x: 88, y: 167, z: 41 },
        { x: 89, y: 167, z: 41 },
        { x: 90, y: 167, z: 41 },
        { x: 91, y: 167, z: 41 },
        { x: 92, y: 167, z: 41 },
        { x: 93, y: 167, z: 41 },
        { x: 94, y: 167, z: 41 },
        { x: 95, y: 167, z: 41 },
        { x: 88, y: 166, z: 41 },
        { x: 89, y: 166, z: 41 },
        { x: 90, y: 166, z: 41 },
        { x: 91, y: 166, z: 41 },
        { x: 92, y: 166, z: 41 },
        { x: 93, y: 166, z: 41 },
        { x: 94, y: 166, z: 41 },
        { x: 95, y: 166, z: 41 },
        { x: 88, y: 165, z: 41 },
        { x: 89, y: 165, z: 41 },
        { x: 90, y: 165, z: 41 },
        { x: 91, y: 165, z: 41 },
        { x: 92, y: 165, z: 41 },
        { x: 93, y: 165, z: 41 },
        { x: 94, y: 165, z: 41 },
        { x: 95, y: 165, z: 41 },
        { x: 88, y: 167, z: 40 },
        { x: 89, y: 167, z: 40 },
        { x: 90, y: 167, z: 40 },
        { x: 91, y: 167, z: 40 },
        { x: 92, y: 167, z: 40 },
        { x: 93, y: 167, z: 40 },
        { x: 94, y: 167, z: 40 },
        { x: 95, y: 167, z: 40 },
        { x: 88, y: 166, z: 40 },
        { x: 89, y: 166, z: 40 },
        { x: 90, y: 166, z: 40 },
        { x: 91, y: 166, z: 40 },
        { x: 92, y: 166, z: 40 },
        { x: 93, y: 166, z: 40 },
        { x: 94, y: 166, z: 40 },
        { x: 95, y: 166, z: 40 },
        { x: 88, y: 165, z: 40 },
        { x: 89, y: 165, z: 40 },
        { x: 90, y: 165, z: 40 },
        { x: 91, y: 165, z: 40 },
        { x: 92, y: 165, z: 40 },
        { x: 93, y: 165, z: 40 },
        { x: 94, y: 165, z: 40 },
        { x: 95, y: 165, z: 40 },
        { x: 101, y: 168, z: 47 },
        { x: 101, y: 168, z: 46 },
        { x: 101, y: 167, z: 47 },
        { x: 101, y: 166, z: 47 },
        { x: 101, y: 167, z: 46 },
        { x: 101, y: 166, z: 46 }
    ],
    3: [
        { x: 51, y: 114, z: 52 },
        { x: 51, y: 114, z: 53 },
        { x: 51, y: 114, z: 54 },
        { x: 51, y: 114, z: 55 },
        { x: 51, y: 114, z: 56 },
        { x: 51, y: 114, z: 57 },
        { x: 51, y: 114, z: 58 },
        { x: 51, y: 115, z: 52 },
        { x: 51, y: 115, z: 53 },
        { x: 51, y: 115, z: 54 },
        { x: 51, y: 115, z: 55 },
        { x: 51, y: 115, z: 56 },
        { x: 51, y: 115, z: 57 },
        { x: 51, y: 115, z: 58 },
        { x: 56, y: 113, z: 111 },
        { x: 56, y: 112, z: 110 },
        { x: 56, y: 112, z: 110 },
        { x: 56, y: 111, z: 110 }
    ],
    4: [
        { x: 54, y: 64, z: 72 },
        { x: 54, y: 64, z: 73 },
        { x: 54, y: 63, z: 73 },
        { x: 54, y: 64, z: 74 },
        { x: 54, y: 63, z: 74 },
        { x: 54, y: 64, z: 75 },
        { x: 54, y: 63, z: 75 },
        { x: 54, y: 62, z: 75 },
        { x: 54, y: 62, z: 74 },
        { x: 54, y: 62, z: 73 }
    ],
    5: [
        { x: 47, y: 68, z: 59 },
        { x: 48, y: 68, z: 59 },
        { x: 49, y: 68, z: 59 },
        { x: 50, y: 68, z: 59 },
        { x: 51, y: 68, z: 59 },
        { x: 52, y: 68, z: 59 },
        { x: 53, y: 68, z: 59 },
        { x: 54, y: 68, z: 59 },
        { x: 55, y: 68, z: 59 },
        { x: 56, y: 68, z: 59 }
    ]
};

Object.values(enderchests).forEach(arr => arr.forEach(coord => setBlock('enderchest', coord.x, coord.y, coord.z)));
Object.values(glass).forEach(arr => arr.forEach(coord => setBlock('glass', coord.x, coord.y, coord.z)));
Object.values(blocks).forEach(arr => arr.forEach(coord => setBlock('air', coord.x, coord.y, coord.z)));