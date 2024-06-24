import Config from "../Config";

register("command", () => {
    Config.openGUI()
}).setName("weedclient").setAliases(["wc", "weed"])