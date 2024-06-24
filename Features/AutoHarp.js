import { events, Player, windowClick, Blocks } from 'chatTriggersAPI';

var inHarp = false;
var lastInv = 0;

events.guiOpen.on(event => {
    if (!Config.autoharp) return;
    if (!event.gui.isChest() || !inSkyblock()) return; // Check if GUI is a chest and player is in Skyblock

    var chestName = event.gui.getInventory().getName();
    if (chestName.startsWith("Harp -")) {
        inHarp = true;
    }
});

events.tick.on(() => {
    if (!Config.autoharp) return;
    if (!inHarp || Player.getPlayer() == null) return;

    var container = Player.getContainer();
    if (!container.isChest() || !container.getName().startsWith("Harp -")) {
        inHarp = false;
        return;
    }

    var newHash = container.getInventory().getItems().slice(0, 36).map(slot => slot.getStack() ? slot.getStack().getDisplayName() : "").join("").hashCode();

    if (lastInv == newHash) return;
    lastInv = newHash;

    for (var ii = 0; ii < 7; ii++) {
        var slot = container.getInventory().getItems()[37 + ii];
        if (slot.getStack() && slot.getStack().getItem() instanceof Java.type('net.minecraft.item.ItemBlock') && slot.getStack().getItem().getBlock() == Blocks.quartz_block) {
            windowClick(container.getWindowId(), slot.getSlotNumber(), 0, true);
            break;
        }
    }
});
