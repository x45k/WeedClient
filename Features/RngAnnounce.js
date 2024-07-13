import config from "../Config";

register("chat", (rng, floor) => {
    if (!(Config.enableRngAnnounce)) return
    setTimeout(() => {
        ChatLib.command(`pc I just dropped ${rng}!`)
        Thread.sleep(500)
        if (!(config().enableGuildRngAnnounce)) return
        ChatLib.command(`gc I just dropped ${rng} from ${floor}!`)
    }, 750)
}).setCriteria("RNG METER! Reselected the ${rng} for Catacombs - ${floor}! CLICK HERE to select a new drop!")