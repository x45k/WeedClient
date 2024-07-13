import config from "../Config"
import Party from "../../BloomCore/Party"

const doPlayerKick = (player) => {
    if (config().playerBlacklistNames.includes(player)) {
        setTimeout(() => {
            ChatLib.command(`p kick ${player}`)
            ChatLib.chat(`&3Kicked &a${player} &3as they are blacklisted!`)
            Thread.sleep(250)
            ChatLib.command(`pc kicked ${player} as they are blacklisted.`)
            
        }, 750)
        
    }
}

register("chat", (player, classs) => {
    if (Party.leader !== Player.getName()) return
    if (config().enableBlacklist !== true) return

    doPlayerKick(player)
    
}).setCriteria("Party Finder > ${player} joined the dungeon group! (${classs} Level ${*})")