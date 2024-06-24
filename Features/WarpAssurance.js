import Config from "../Config";
import Party from "../../BloomCore/Party";

register("chat", () => {
    if (!Config.enableWarpAssurance) return
    if (Party.leader !== Player.getName()) return

    ChatLib.command("p warp")

}).setCriteria("Starting in 4 seconds.")