import config from "../Config"

const architect = (player) => {
    if (!config().autoArchitectDraft) return

    // Some delay since you can't use the command in combat
    Client.scheduleTask(30, () => {
        ChatLib.command("gfs architect's first draft 1")
    })
}

// Normal Puzzles
register("chat", architect).setCriteria(/^PUZZLE FAIL! (\w{1,16}) .+$/)

// Quiz
register("chat", architect).setCriteria(/^\[STATUE\] Oruo the Omniscient: (\w{1,16}) chose the wrong answer! I shall never forget this moment of misrememberance\.$/)