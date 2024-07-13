import config from "../Config"
import Party from "../../BloomCore/Party";

register("chat", () => {
    setTimeout(() => {
        if (!config().enableWarpAssurance) return
        if (Party.leader !== Player.getName()) return
        ChatLib.command("p warp")
        Thread.sleep(1000)
    }, 0)

}).setCriteria("${username} is now ready!")