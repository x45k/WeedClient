import config from "../Config"

register('tick', () => {
    if (config.autoRejoinDungeons) return;
    let scoreboardInfoData = Scoreboard.getLines()
    let scoreboardInfo = scoreboardInfoData.join()
    if (scoreboardInfo.includes("(F1)")) ChatLib.command(`joindungeon catacombs 1`)
    if (scoreboardInfo.includes("(F2)")) ChatLib.command(`joindungeon catacombs 2`)
    if (scoreboardInfo.includes("(F3)")) ChatLib.command(`joindungeon catacombs 3`)
    if (scoreboardInfo.includes("(F4)")) ChatLib.command(`joindungeon catacombs 4`)
    if (scoreboardInfo.includes("(F5)")) ChatLib.command(`joindungeon catacombs 5`)
    if (scoreboardInfo.includes("(F6)")) ChatLib.command(`joindungeon catacombs 6`)
    if (scoreboardInfo.includes("(F7)")) ChatLib.command(`joindungeon catacombs 7`)
    if (scoreboardInfo.includes("(M1)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 1`)
    if (scoreboardInfo.includes("(M2)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 2`)
    if (scoreboardInfo.includes("(M3)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 3`)
    if (scoreboardInfo.includes("(M4)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 4`)
    if (scoreboardInfo.includes("(M5)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 5`)
    if (scoreboardInfo.includes("(M6)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 6`)
    if (scoreboardInfo.includes("(M7)")) ChatLib.command(`joindungeon MASTER_CATACOMBS 7`)
})