import Config from "../unusedconfig"

const blessings = [
    /^DUNGEON BUFF! .+ found a Blessing of .+!$/,
    /^     Granted you .+\.$/,
    /^     Grants you .+\.$/,
    /^     Also granted you .+ & .+\.$/,
    /^.+ has obtained Blessing of .+!$/,
    /^DUNGEON BUFF! A Blessing of .+ was found! .+$/,
    /^A Blessing of .+ was picked up!$/
]

blessings.forEach(regex => {
    register("chat", (event) => {
        if (!Config.blessingNotifier) return
        Client.showTitle('&r&9&lBlessing!', "", 10, 100, 10);
    }).setCriteria(regex)
})