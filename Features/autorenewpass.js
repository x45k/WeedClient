import config from "../Config"

register("chat", () => {
    if (config.autoRenewPass) {
            ChatLib.command("purchasecrystallhollowspass", false)
    }
}).setChatCriteria(/Your pass to the Crystal Hollows will expire in 1 minute/g)