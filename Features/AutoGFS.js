import Config from "../Config";

register("tick", () => {
    if (Config.enableAutoGfs !== true) return
    if (Player.getInventory().getItems().some(a => a?.getName()?.removeFormatting() === "Ender Pearl") == false) {
        ChatLib.command("od ep")
    }
})

