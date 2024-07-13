import config from "../Config"

// Auto Edrag
let p4Done = false

register('worldLoad', () => p4Done = false)

register("chat", () => {
    p4Done = true
}).setCriteria("[BOSS] Wither King: You.. again?")

register('tick', (ticks) => {      
    if (!config().autoEdrag) return
    if (!Client.currentGui.get()) {
        ChatLib.command('pet')
        ChatLib.chat("Trying to equip Ender Dragon pet")
        return
    }
    if (Player.getContainer()?.getName()?.match(/\(\d\/\d\)? ?Pets/)) {
        let edragIndex = Player.getContainer()?.getItems()?.findIndex(item => item && item.getName()?.match(/§.\[Lvl \d+\] §.Ender Dragon/))
        if (edragIndex == -1) {
            Client.currentGui.close()
            ChatLib.chat("No Ender Dragon pet found.")
        } else {
            Player.getContainer().click(edragIndex, false, "MIDDLE")
            p4Done = false
        }
    }
})