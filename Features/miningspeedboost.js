import config from "../Config"

register("Chat", (event) => {
            if (config().miningSpeedBoost) {
                Client.showTitle('&r&9&lBoost Available!', "", 10, 100, 10);
            }
        }
).setChatCriteria('Mining Speed Boost is now available!')