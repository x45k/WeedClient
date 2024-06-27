import { getEntitySkullTexture, EntityArmorStand } from "../../BloomCore/utils/Utils";

register("command", () => {
    World.getAllEntitiesOfType(EntityArmorStand).forEach(entity => {
        if (getEntitySkullTexture(entity) == null) return
        ChatLib.chat(getEntitySkullTexture(entity))
    })
}).setCommandName("getskulls")