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