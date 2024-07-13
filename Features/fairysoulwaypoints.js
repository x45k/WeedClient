import config from "../Config"
import { createWaypoint } from "../utils/utils"
import { getEntitySkullTexture, EntityArmorStand} from "../../BloomCore/utils/Utils"

const soulString = "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjk2OTIzYWQyNDczMTAwMDdmNmFlNWQzMjZkODQ3YWQ1Mzg2NGNmMTZjMzU2NWExODFkYzhlNmIyMGJlMjM4NyJ9fX0="

register("renderWorld", () => {
    World.getAllEntitiesOfType(EntityArmorStand).forEach(Entity => {
        let posx = Entity.getX()
        let posy = Entity.getY()
        let posz = Entity.getZ()
        if (getEntitySkullTexture(Entity) === null) return
        if (getEntitySkullTexture(Entity) !== soulString) return
        if (!config().showSouls) return
        createWaypoint("any", "Fairy Soul", 128, 0, 128, posx, posy, posz)
    })
})