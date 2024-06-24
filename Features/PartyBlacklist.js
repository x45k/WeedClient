import Config from "../Config"
import Party from "../../BloomCore/Party"

const doPlayerKick = (player) => {
    if (Config.playerBlacklistNames.includes(player)) {
        ChatLib.command(`p kick ${player}`)
        ChatLib.chat(`&3Kicked &a${player} &3as they are blacklisted!`)
    }
}

register("chat", (player, classs) => {
    if (Party.leader !== Player.getName()) return
    if (Config.enableBlacklist !== true) return

    doPlayerKick(player)
    
}).setCriteria("Party Finder > ${player} joined the dungeon group! (${classs} Level ${*})")