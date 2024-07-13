import config from "../Config"

const EntityLightningBolt = Java.type("net.minecraft.entity.effect.EntityLightningBolt")

if (config().hideLightning) {
    register("renderEntity", (event) => {
        cancel(event);
    }).setFilteredClass(EntityLightningBolt);
}