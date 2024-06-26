function createWaypoint(world, text, redval, greenval, blueval) {
    const skullID = '57a4c8dc-9b8e-3d41-80da-a608901a6147';
    let skullLocations = [];

    function isSkullWithID(entity) {
        return entity.getType() === EntityType.SKULL && entity.getUUID().toString() === skullID;
    }

    register('entity_spawned', function (event) {
        let entity = event.getEntity();

        if (isSkullWithID(entity)) {
            skullLocations.push(entity.getLocation());
            updateWaypoint();
        }
    });

    register('entity_despawned', function (event) {
        let entity = event.getEntity();

        if (isSkullWithID(entity)) {
            skullLocations = skullLocations.filter(loc => !loc.equals(entity.getLocation()));
        }
    });

    function updateWaypoint() {
        let xCoords = skullLocations.map(loc => loc.getX().toFixed(1)).join(', ');
        let yCoords = skullLocations.map(loc => loc.getY().toFixed(1)).join(', ');
        let zCoords = skullLocations.map(loc => loc.getZ().toFixed(1)).join(', ');

        let waypointText = `${text}\nSkull Positions:\nX: ${xCoords}\nY: ${yCoords}\nZ: ${zCoords}`;

        removeOldWaypoint();

        if (skullLocations.length > 0) {
            let waypoint = new CustomWaypoint(waypointText, new Color(redval, greenval, blueval), skullLocations[0]);
    }
}