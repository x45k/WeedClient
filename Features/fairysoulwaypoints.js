const skullUUID = "57a4c8dc-9b8e-3d41-80da-a608901a6147";

let skullPosition = null;

function createWaypoint(world, text, redval, greenval, blueval, posx, posy, posz) {
    register("renderWorld", () => {
        createWaypoint(world, text, redval, greenval, blueval, posx, posy, posz);
    });
}

function removeWaypoint() {
    skullPosition = null;
}

register("tick", () => {
    const world = World.getWorld();

    world.getEntities().forEach(entity => {
        if (entity.getUUID().toString() === skullUUID) {
            const posX = entity.getX();
            const posY = entity.getY();
            const posZ = entity.getZ();

            skullPosition = { world: world.getName(), posX, posY, posZ };

            createWaypoint(world.getName(), "Skull Waypoint", 1, 0, 0, posX, posY, posZ);
        }
    });
});

register("rightClick", event => {
    const clickedEntity = event.getEntity();

    if (clickedEntity && clickedEntity.getUUID().toString() === skullUUID) {
        removeWaypoint();
    }
});

register("renderWorld", () => {
    if (skullPosition) {
        createWaypoint(
            skullPosition.world,
            "Skull Waypoint",
            1, 0, 0,
            skullPosition.posX,
            skullPosition.posY,
            skullPosition.posZ
        );
    }
});
