import config from "../Config";

register("worldLoad", () => {
    if (!config().enableloadingmessages) return
    ChatLib.chat("&2[WEED CLIENT] &7loading...");
    setTimeout(() => {ChatLib.chat("&2[WEED CLIENT] &7loaded!")}, 500)
});
