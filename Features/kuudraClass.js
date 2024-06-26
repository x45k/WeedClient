import Config from "../Config";

let lastclick = new Date().getTime()-2000
let timesOpened = 0

register("tick", () => {
    if (!Config.enableClassBuyer || timesOpened !== 0) return
    let inv = Player.getContainer();
    let n = inv.getName();
    new Thread(() => {
        if (n !== "Perk Menu") return
        Thread.sleep(100)
        if (Config.classType == 0) {
            if (new Date().getTime() - lastclick > 1000) {
                inv.click(14, false, "MIDDLE")
                Thread.sleep(500)
                Player.getContainer().click(20,false,"MIDDLE")
                lastclick = new Date().getTime()
                timesOpened = 1
            }
        }
        if (Config.classType == 1) {
            if (new Date().getTime() - lastclick > 1000) {
                inv.click(16, false, "MIDDLE")
                Thread.sleep(500)
                Player.getContainer().click(20,false,"MIDDLE")
                lastclick = new Date().getTime()
                timesOpened = 1
            }
        }
        if (Config.classType == 2) {
            if (new Date().getTime() - lastclick > 1000) {
                inv.click(12, false, "MIDDLE")
                Thread.sleep(500)
                Player.getContainer().click(20,false,"MIDDLE")
                lastclick = new Date().getTime()
                timesOpened = 1
            }
        }
        if (Config.classType == 3) {
            if (new Date().getTime() - lastclick > 1000) {
                inv.click(10, false, "MIDDLE")
                Thread.sleep(500)
                Player.getContainer().click(20,false,"MIDDLE")
                lastclick = new Date().getTime()
                timesOpened = 1
            }
        }
    }).start()
})

register("chat", () => {timesOpened = 0}).setCriteria("[NPC] Elle: Talk with me to begin!")
