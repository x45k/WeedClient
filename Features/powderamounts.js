import { registerWhen } from "../../BloomCore/utils/Utils";
import Config from "../Config"
import { data } from "../utils/data"

const startingLine = "Gemstone:";

register("tick", () => {
    const tabListLines = TabList.getNames().map(line => line.removeFormatting());
    const matchingLine = tabListLines.find(line => line.startsWith(startingLine));

    /* if (Config.MovePowderGui.isOpen() && time == 0) {
        new Text('Gemstone Found: ' + '69,420', data.powderCoords.x, data.powderCoords.y + 10).setShadow(true).setColor(Renderer.LIGHT_PURPLE).draw()
        new Text('Mithril Found: ' + '69,420', data.powderCoords.x, data.powderCoords.y + 20).setShadow(true).setColor(Renderer.GREEN).draw()
    } */
});

register("dragged", (mx, my, x, y) => {
    if (!Config.powderGui.isOpen()) return
    data.powderAmounts.x = x
    data.powderAmounts.y = y
    data.save()
})

registerWhen(register("renderOverlay", () => {
    if (!Config.powderDisplay) return
    Renderer.drawString(matchingLine, data.powderAmounts.x, data.powderAmounts.y)
}), () => Config.powderDisplay)