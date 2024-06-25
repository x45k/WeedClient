import Config from "../Config";

register("worldLoad", () => {
    if (!Config.enableloadingmessages) return
    ChatLib.chat("&2[WEED CLIENT] &7loading...");
    setTimeout(() => {ChatLib.chat("&2[WEED CLIENT] &7loaded!")}, 500)
});
