import Config from "../Config";

// Function to make the player look at a specific yaw
function setPlayerYaw(yaw) {
    Client.getMinecraft().field_71439_g.field_70177_z = yaw;
    Client.getMinecraft().field_71439_g.field_70126_B = yaw;
}

// Register a trigger for when the player collides with a block
register("tick", () => {
    if (Config.guibarphase) {
        let yaw = Player.getYaw();
        let px = Player.getX();
        let py = Player.getY();
        let pz = Player.getZ();

        let blockInFront = World.getBlockAt(px + Math.sin(Math.PI * yaw / 180), py, pz - Math.cos(Math.PI * yaw / 180));
        if (blockInFront.getType().getName() === "minecraft:iron_bars" || blockInFront.getType().getName() === "minecraft:glass_pane") {
            // Calculate the yaw to look directly at the block
            let targetYaw = Math.atan2(-blockInFront.getZ() + pz, blockInFront.getX() - px) * 180 / Math.PI;
            setPlayerYaw(targetYaw);

            // Execute the hclipbo command in chat
            ChatLib.command("hclipbo 0.7", true);
        }
    }
});
