import Config from "../unusedconfig"

register("Chat", (event) => {
            if (Config.miningSpeedBoostOver) {
                Client.showTitle('&r&9&lBoost Over!', "", 10, 100, 10);
            }
        }
).setChatCriteria('Your Mining Speed Boost has expired!')