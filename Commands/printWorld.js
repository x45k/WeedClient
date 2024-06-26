import { getWorld } from "../utils/utils"

register("command", () => {
    let world = getWorld()
    ChatLib.chat(`&3The current world is: &2${world}`)
}).setCommandName("getworld")