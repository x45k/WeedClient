import { registerWhen } from "../../BloomCore/utils/Utils";
import config, { myGui } from "../Config";
import { data } from "../utils/data";

let gemstoneInfo = '';
let mithrilInfo = '';

const extractGemstoneInfo = () => {
    try {
        TabList?.getNames()?.forEach(line => {
            let match = line.removeFormatting().match(/Gemstone:\s*(.+)/);
            if (match) {
                gemstoneInfo = match[1];
            }
        });
    } catch (e) {
        gemstoneInfo = '';
    }
};

const extractMithrilInfo = () => {
    try {
        TabList?.getNames()?.forEach(line => {
            let match = line.removeFormatting().match(/Mithril:\s*(.+)/);
            if (match) {
                mithrilInfo = match[1];
            }
        });
    } catch (e) {
        mithrilInfo = '';
    }
};

register("tick", () => {
    extractGemstoneInfo();
    extractMithrilInfo();
    /* if (Config.MovePowderGui.isOpen() && time == 0) {
        new Text('Gemstone Found: ' + '69,420', data.powderCoords.x, data.powderCoords.y + 10).setShadow(true).setColor(Renderer.LIGHT_PURPLE).draw()
        new Text('Mithril Found: ' + '69,420', data.powderCoords.x, data.powderCoords.y + 20).setShadow(true).setColor(Renderer.GREEN).draw()
    } */
});

register("dragged", (mx, my, x, y) => {
    if (!myGui.isOpen()) return;
    data.powderAmounts.x = x;
    data.powderAmounts.y = y;
    data.save();
});

registerWhen(register("renderOverlay", () => {
    if (!config().powderDisplay) return;
    Renderer.drawString(`&d&lGemstone Info: ${gemstoneInfo}\n&2&lMithril Info: ${mithrilInfo}`, data.powderAmounts.x, data.powderAmounts.y);
}), () => config().powderDisplay);