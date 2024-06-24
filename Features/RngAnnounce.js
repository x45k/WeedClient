import Config from "../Config";

register("chat", (rng, floor) => {
    if (!(Config.enableRngAnnounce)) return
    ChatLib.command(`pc I just dropped ${rng}!`)
    if (!(Config.enableGuildRngAnnounce)) return
    ChatLib.command(`gc I just dropped ${rng} from ${floor}!`)
}).setCriteria("RNG METER! Reselected the ${rng} for Catacombs - ${floor}! CLICK HERE to select a new drop!")