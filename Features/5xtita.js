import config from "../Config"

register("Chat", (event) => {
            if (config().fiveTimesTitanium) {
                Client.showTitle('&r&9&lx5 Titanium!', "", 10, 100, 10);
            }
        }
).setCriteria('&r&fGain &r&a5x &r&9Titanium &r&fdrops&r').setContains();