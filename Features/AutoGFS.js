import Config from "../Config";

register("tick", () => {
    if (Config.enableAutoGfsPearls !== true) return
    if (Player.getInventory().getItems().some(a => a?.getName()?.removeFormatting() === "Ender Pearl") == false) {
        ChatLib.command("gfs ender pearl 16")
    }
})

register("tick", () => {
    if (Config.enableAutoGfsJerrys !== true) return
    if (Player.getInventory().getItems().some(a => a?.getName()?.removeFormatting() === "Inflatable Jerry") == false) {
        ChatLib.command("gfs Inflatable Jerry 64")
    }
})

register("tick", () => {
    if (Config.enableAutoGfsDecoys !== true) return
    if (Player.getInventory().getItems().some(a => a?.getName()?.removeFormatting() === "§aDecoy") == false) {
        ChatLib.command("gfs Decoy 64")
    }
})