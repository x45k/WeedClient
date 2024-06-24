import Config from "../Config";

register("tick", function () {
    if (!guibarphase || mc.thePlayer == null || mc.theWorld == null) return;

    var pos = new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ);
    var blockState = mc.theWorld.getBlockState(pos);

    if (mc.thePlayer.isCollidedHorizontally &&
        (equalsOneOf(blockState.getBlock(), Blocks.iron_bars, Blocks.glass_pane, Blocks.stained_glass_pane) ||
         equalsOneOf(mc.theWorld.getBlockState(pos.up()).getBlock(), Blocks.iron_bars, Blocks.glass_pane, Blocks.stained_glass_pane))) {

        var dir = direction();
        if (!dir) {
            phaseTicks = 0;
            return;
        }

        var loc = new Vec3(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ);
        var offsVec = new Vec3(0.0, 1.0, 0.0).crossProduct(new Vec3(dir.directionVec));

        offsVec = offsVec.scale(0.3);

        var flag = mc.theWorld.getBlockState(new BlockPos(loc.add(offsVec)).offset(dir)).getBlock() === Blocks.air &&
                   mc.theWorld.getBlockState(new BlockPos(loc.subtract(offsVec)).offset(dir)).getBlock() === Blocks.air &&
                   mc.theWorld.getBlockState(new BlockPos(loc.add(offsVec)).offset(dir).up()).getBlock() === Blocks.air &&
                   mc.theWorld.getBlockState(new BlockPos(loc.subtract(offsVec)).offset(dir).up()).getBlock() === Blocks.air;

        if (flag && phaseTicks >= phaseDelay.value) {
            var yaw = Player.getYaw();
            var px = Player.getX();
            var py = Player.getY();
            var pz = Player.getZ();

            var yawRad = Math.PI * yaw / 180;

            var newx = -Math.sin(yawRad) * 0.7;
            var newz = Math.cos(yawRad) * 0.7;

            Client.getMinecraft().field_71439_g.func_70107_b(px + newx, py, pz + newz);

            phaseTicks = 0;
        } else {
            phaseTicks++;
        }
    } else {
        phaseTicks = 0;
    }
});

function direction() {
    if (inRange(mc.thePlayer.posX, minCoord - 0.3)) return EnumFacing.EAST;
    if (inRange(mc.thePlayer.posZ, minCoord - 0.3)) return EnumFacing.SOUTH;
    if (inRange(mc.thePlayer.posX, maxCoord + 0.3)) return EnumFacing.WEST;
    if (inRange(mc.thePlayer.posZ, maxCoord + 0.3)) return EnumFacing.NORTH;
    return null;
}

function inRange(a, coord) {
    var b = a > 0 ? a % 1 : 1 + a % 1;
    return b % 1 > coord - 0.00015 && b % 1 < coord + 0.00015;
}