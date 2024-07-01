import Config from "../Config"

register("Chat", (event) => {
            if (Config.fiveTimesTitanium) {
                Client.showTitle('&r&9&lx5 Titanium!', "", 10, 100, 10, 63);
            }
        }
).setCriteria('&r&fGain &r&a5x &r&9Titanium &r&fdrops&r').setContains();