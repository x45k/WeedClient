import Config from "../Config"

const EntityLightningBolt = Java.type("net.minecraft.entity.effect.EntityLightningBolt")

if (Config.hideLightning) {
    register("renderEntity", (event) => {
        cancel(event);
    }).setFilteredClass(EntityLightningBolt);
}