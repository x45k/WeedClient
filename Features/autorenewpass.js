import Config from "../unusedconfig"

register("chat", () => {
    if (Config.autoRenewPass) {
            ChatLib.command("purchasecrystallhollowspass", false)
    }
}).setChatCriteria(/Your pass to the Crystal Hollows will expire in 1 minute/g)