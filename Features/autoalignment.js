import { EntityItemFrame, MouseEvent, getDistanceToCoord, getEntityXYZ, registerWhen } from "../../BloomCore/utils/Utils"
import config from "../Config"

const solutions = [
    [7,7,7,7,9,1,9,9,9,9,1,3,3,3,3,9,9,9,9,1,9,7,7,7,1],
    [9,9,9,9,9,1,9,1,9,1,1,9,1,9,1,1,9,1,9,1,9,9,9,9,9],
    [5,3,3,3,9,5,9,9,9,9,7,7,9,9,9,1,9,9,9,9,1,3,3,3,9],
    [9,9,9,9,9,9,1,9,1,9,7,1,7,1,3,1,9,1,9,1,9,9,9,9,9],
    [9,9,7,7,5,9,7,1,9,5,9,9,9,9,9,9,7,5,9,1,9,9,7,7,1],
    [7,7,9,9,9,1,9,9,9,9,1,3,3,3,3,9,9,9,9,1,9,9,9,7,1],
    [5,3,3,3,3,5,9,9,9,1,7,7,9,9,1,9,9,9,9,1,9,7,7,7,1],
    [7,7,9,9,9,1,9,9,9,9,1,3,9,7,5,9,9,9,9,5,9,9,9,3,3],
    [9,9,9,9,9,1,3,3,3,3,9,9,9,9,1,7,7,7,7,1,9,9,9,9,9]
]

const deviceStandLocation = [0, 120, 77]
const deviceCorner = [-2, 120, 75]

const recentClicks = new Map()
const remainingClicks = new Map()
let currentFrames = null
let solution = null

const getCoordFromIndex = (index) => {
    const x = deviceCorner[0]
    const y = deviceCorner[1] + index % 5
    const z = deviceCorner[2] + Math.floor(index / 5)
    return [x, y, z]
}

const getCurrentFrameRotations = () => {
    const itemFrames = World.getAllEntitiesOfType(EntityItemFrame)
    const posMap = new Map()

    for (let frame of itemFrames) {
        let pos = getEntityXYZ(frame).map(Math.floor)
        let posStr = pos.join()

        let mcItem = frame.getEntity().func_82335_i()
        if (!mcItem) continue

        let ctItem = new Item(mcItem)
        if (ctItem.getRegistryName() !== "minecraft:arrow") continue

        let rotation = frame.getEntity().func_82333_j()

        posMap.set(posStr, rotation)
    }

    let [x, y0, z0] = deviceCorner
    let arr = []
    for (let dz = 0; dz < 5; dz++) {
        for (let dy = 0; dy < 5; dy++) {
            let index = dy + dz * 5

            if (currentFrames && recentClicks.has(index) && Date.now() - recentClicks.get(index) < 1000) {
                arr.push(currentFrames[index])
                continue
            }

            let y = y0 + dy
            let z = z0 + dz
            let posStr = `${x},${y},${z}`

            if (posMap.has(posStr)) {
                arr.push(posMap.get(posStr))
                continue
            }
            
            arr.push(9)
        }
    }
    
    return arr
}

const getClicksForRotation = (start, end) => (8 - start + end) % 8

const clickFrame = (index, clicks) => {
    const [x, y, z] = getCoordFromIndex(index);
    const itemFrames = World.getAllEntitiesOfType(EntityItemFrame);
    let closestFrame = null;
    let closestDistance = Infinity;

    for (let frame of itemFrames) {
        let [fx, fy, fz] = getEntityXYZ(frame);
        let distance = Math.sqrt((x - fx) ** 2 + (y - fy) ** 2 + (z - fz) ** 2);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestFrame = frame;
        }
    }

    if (closestFrame && closestDistance <= 0.5) {
        for (let i = 0; i < clicks; i++) {
            Client.scheduleTask(() => {
                Client.getMinecraft().field_71442_b.func_187098_a(Player.getPlayer(), closestFrame.getEntity());
            }, i * 50);
        }
    }
}

register("tick", () => {
    if (!config().autoAlign || getDistanceToCoord(...deviceStandLocation) > 10) {
        currentFrames = null
        remainingClicks.clear()
        solution = null
        return
    }
    
    remainingClicks.clear()
    currentFrames = getCurrentFrameRotations()

    solutions.forEach(arr => {
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i] == 9 || currentFrames[i] == 9) && arr[i] !== currentFrames[i]) return
        }
        
        solution = arr

        for (let i = 0; i < arr.length; i++) {
            let curr = currentFrames[i]
            let needed = arr[i]
            let clicksNeeded = getClicksForRotation(curr, needed)

            if (clicksNeeded == 0) continue

            remainingClicks.set(i, clicksNeeded)
            clickFrame(i, clicksNeeded)
        }
    })
})

registerWhen(register(MouseEvent, (event) => {
    const btn = event.button
    const btnState = event.buttonstate

    if (btn !== 1 || !btnState) return

    const la = Player.lookingAt()
    if (!la || !(la instanceof Entity) || !(la.getEntity() instanceof EntityItemFrame)) return

    let [x, y, z] = getEntityXYZ(la).map(Math.floor)
    
    let dy = y - deviceCorner[1]
    let dz = z - deviceCorner[2]
    let index = dy + dz * 5

    if (x !== deviceCorner[0] || currentFrames[index] == 9 || index < 0 || index > 24) return
    
    recentClicks.set(index, Date.now())
    currentFrames[index] = (currentFrames[index] + 1) % 8

    const remaining = getClicksForRotation(currentFrames[index], solution[index])
    if (remaining == 0) remainingClicks.delete(index)
}), () => config().autoAlign && currentFrames && solution)

registerWhen(register("renderWorld", () => {
    for (let e of remainingClicks.entries()) {
        let [index, clicks] = e
        let [x, y, z] = getCoordFromIndex(index)
        Tessellator.drawString(clicks.toString(), x, y+0.6, z+0.5, Renderer.WHITE, false, 0.03, false)
    }
}), () => remainingClicks.size !== 0)
