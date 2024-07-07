import renderBeaconBeam from "../../BeaconBeam";

export function getWorld() {
    let area = 'null'
    try {
        TabList?.getNames()?.forEach(line => {
            let match = line.removeFormatting().match(/Area: (.+)/)
            if (line.removeFormatting() == 'Dungeon: Catacombs') area = 'Dungeons'
            if (!match) return
            area = match[1]
        })
    } catch (e) { }
    return area
}
export function isInDungeon() {
    try {
        return TabList?.getNames()?.some(a => a.removeFormatting() == 'Dungeon: Catacombs')
    } catch (e) { }
}


export function createWaypoint(world, text, redval, greenval, blueval, posx, posy, posz) {
    if (getWorld() == world || world == "any") {
        renderBeaconBeam(posx, posy, posz, redval, greenval, blueval, 0.5, true, 300)
        Tessellator.drawString(text, posx, posy+1, posz, -1157562624, true, 1, true)
    }
}

export function sendPlacementPacketWithStack(itemStack) {
    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, itemStack, 0, 0, 0))
  }

export const registerWhen = (trigger, dependency, debugInfo = { type: '', name: '' }) => {
    registers.push([trigger.unregister(), dependency, false, debugInfo]);
}

export const Vec3 = Java.type("net.minecraft.util.Vec3")

export function lookAt(x, y, z) {
    const player = Player.getPlayer();
    const dx = x - player.getX();
    const dy = y - (player.getY() + player.getEyeHeight());
    const dz = z - player.getZ();
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const pitch = -Math.atan2(dy, distance) * 180 / Math.PI;
    const yaw = Math.atan2(dz, dx) * 180 / Math.PI - 90;
    player.setPitch(pitch);
    player.setYaw(yaw);
}

export function rightClick() {
    Client.getMinecraft().rightClickMouse();
}
