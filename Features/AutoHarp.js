import Config from "../Config";

var inHarp = false;
var lastInv = 0;

register("GuiOpen", function(event) {
    if (!Config.autoharp) return;
    if (!(event.gui instanceof GuiChest) || !inSkyblock()) return;

    var container = event.gui.inventorySlots;
    if (container instanceof ContainerChest) {
        var chestName = container.lowerChestInventory.displayName.unformattedText;
        if (chestName.startsWith("Harp -")) {
            inHarp = true;
        }
    }
});

register("Tick", function() {
    if (!Config.autoharp) return;
    if (!inHarp || Player.getPlayer() == null) return;

    var container = Player.getContainer();
    if (!(container instanceof ContainerChest) || !container.name.startsWith("Harp -")) {
        inHarp = false;
        return;
    }

    var newHash = container.inventorySlots.slice(0, 36).map(function(slot) {
        return slot.getStack() ? slot.getStack().getName() : "";
    }).join("").hashCode();

    if (lastInv == newHash) return;
    lastInv = newHash;
    
    var quartzSlot = container.inventorySlots[36];
    if (quartzSlot.getStack() && quartzSlot.getStack().getItem() instanceof ItemBlock && quartzSlot.getStack().getItem().getBlock() == Blocks.quartz_block) {
        windowClick(container.windowId, quartzSlot.slotNumber, 0, true);
    }
});
