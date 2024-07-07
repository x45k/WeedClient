import { C02PacketUseEntity, EntityArmorStand } from "../../BloomCore/utils/Utils"
import Config from "../Config"
import { Vec3 } from "../utils/utils"

let disabler = false
register('worldLoad', () => disabler = false)
register("chat", () => disabler = true).setCriteria("[BOSS] Wither King: You.. again?")

register('tick', () => {
    if (disabler || !Config.relicAura) return;
    let armorStands = World.getAllEntitiesOfType(EntityArmorStand);
    for (let i = 0; i < armorStands.length; i++) {
        let e = armorStands[i];
        if (!(new EntityLivingBase(e?.getEntity()).getItemInSlot(4)?.getNBT()?.toString()?.includes("Relic")) || Player.asPlayerMP.distanceTo(e)) continue
        interactWithEntity(e.getEntity());
    }
});

const interactWithEntity = (entity) => {
    const objectMouseOver = Client.getMinecraft().field_71476_x.field_72307_f;
    const dx = objectMouseOver.xCoord - entity.field_70165_t;
    const dy = objectMouseOver.yCoord - entity.field_70163_u;
    const dz = objectMouseOver.zCoord - entity.field_70161_v;
    Client.sendPacket(new C02PacketUseEntity(entity, new Vec3(dx, dy, dz)));
}