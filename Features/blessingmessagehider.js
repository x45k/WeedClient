import config from "../Config"

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
        if (!config().hideBlessings) return
        cancel(event)
    }).setCriteria(regex)
})