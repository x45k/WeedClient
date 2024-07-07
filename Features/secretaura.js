import { C02PacketUseEntity, TileEntityChest } from "../../BloomCore/utils/Utils";
import Config from "../Config";
import { Vec3, isInDungeon } from "../utils/utils";

register('step', () => {
    if (!isInDungeon || !Config.secratAura) return;

    // Find and interact with levers and chests
    let entities = World.getAllTileEntitiesOfType(TileEntityChest);
    for (let i = 0; i < entities.length; i++) {
        let e = entities[i];
        if (Player.asPlayerMP.distanceTo(e) < 4) {  // Adjust the distance as needed
            interactWithEntity(e);
        }
    }
}).setDelay(1);

const interactWithEntity = (entity) => {
    const objectMouseOver = Client.getMinecraft().field_71476_x.field_72307_f;
    const dx = objectMouseOver.xCoord - entity.field_70165_t;
    const dy = objectMouseOver.yCoord - entity.field_70163_u;
    const dz = objectMouseOver.zCoord - entity.field_70161_v;
    Client.sendPacket(new C02PacketUseEntity(entity, new Vec3(dx, dy, dz)));
};