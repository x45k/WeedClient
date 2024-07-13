import config from "../Config"
import { createWaypoint } from "../utils/utils"
import { getEntitySkullTexture, EntityArmorStand} from "../../BloomCore/utils/Utils"

const felHeadString = "ewogICJ0aW1lc3RhbXAiIDogMTYwMDg4ODM0MDM5MiwKICAicHJvZmlsZUlkIiA6ICJhMmY4MzQ1OTVjODk0YTI3YWRkMzA0OTcxNmNhOTEwYyIsCiAgInByb2ZpbGVOYW1lIiA6ICJiUHVuY2giLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzI4NmRhY2IwZjIxNDRkN2E0MTg3YmUzNmJiYWJlOGE5ODgyOGY3Yzc5ZGZmNWNlMDEzNjhiNjMwMDE1NTY2MyIKICAgIH0KICB9Cn0="

register("renderWorld", () => {
    World.getAllEntitiesOfType(EntityArmorStand).forEach(Entity => {
        let posx = Entity.getX()
        let posy = Entity.getY()
        let posz = Entity.getZ()
        if (getEntitySkullTexture(Entity) === null) return
        if (getEntitySkullTexture(Entity) !== felHeadString) return
        if (!config().felWaypoints) return
        createWaypoint("Dungeons", "Fel", 128, 0, 128, posx, posy, posz)
    })
})