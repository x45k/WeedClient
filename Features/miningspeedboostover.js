import config from "../unusedconfig"

register("Chat", (event) => {
            if (config().miningSpeedBoostOver) {
                Client.showTitle('&r&9&lBoost Over!', "", 10, 100, 10);
            }
        }
).setChatCriteria('Your Mining Speed Boost has expired!')