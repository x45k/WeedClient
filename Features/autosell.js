import Config from "../Config.js"
import PogObject from "../../PogData/index.js"

let intrades = false
let going = false
let q = []
register("tick", () => {
    if (intrades || !Config.autoSell) return
    let inv = Player.getContainer();
    if (inv.getName() != "Trades" && !inv.getName().includes('Booster Cookie')) return
    for (let i=54; i<88; i++) {
        let item = ChatLib.removeFormatting(Player.getContainer()?.getStackInSlot(i)?.getName()?.toLowerCase())
        for (let toSell of AutoSell.sellable) {
            if (item?.includes(toSell.toLowerCase())) {
                q.push(i)
            }
        }
    }
    intrades = true
    going = true
})

counter = 0
register("step", () => {
    if (!going) return
    if (counter >= q.length) {
        counter = 0
        going = false
        q.length = 0
        return
    }
    Player.getContainer().click(q[counter],false,"MIDDLE")
    counter++ 
}).setFps(6)

register('GuiClosed', () => {
    if (!intrades) return
    intrades = false
    q = []
});

register("command", (...args) => {
    if (!args || args.length < 2) {
        ChatLib.chat("Incorrect usage. /autosell add/remove <name>")
        return
    }
     
    type = args.splice(0,1)
    let name = args.join(" ").toLowerCase()
    if (type == "add") {
        ChatLib.chat("adding")
        if (AutoSell.sellable.includes(name)) {
            ChatLib.chat(`${name} is already in the list`)
        } else {
            AutoSell.sellable.push(name)
            ChatLib.chat(name + " has been added to the list")
            AutoSell.save()
        }
    } else if (type == "remove") {
        if (!AutoSell.sellable.includes(name)) {
            ChatLib.chat("Couldn't remove " + name + " from the list")
        } else {
            AutoSell.sellable = AutoSell.sellable.filter(nam => nam !== name)
            ChatLib.chat(name + " has been removed from the list")
            AutoSell.save()
        }
    }
}).setName("autosell").setTabCompletions("add, remove")


register("command", () => {
    ChatLib.chat(AutoSell.sellable)
}).setName("getselllist")

register("command", () => {
    AutoSell.length = 0
    ChatLib.chat("Cleared autosell list")
}).setName("clearselllist")

const AutoSell = new PogObject("Weed", {
    sellable: [
        "Enchanted Ice",
        "Health Potion",
        "Superboom TNT",
        "Rotten",
        "Skeleton Master",
        "Skeleton Grunt",
        "Skeleton Lord",
        "Skeleton Soldier",
        "Zombie Soldier",
        "Zombie Knight",
        "Zombie Commander",
        "Zombie Lord",
        "Skeletor",
        "Super Heavy",
        "Heavy",
        "Sniper Helmet",
        "Dreadlord",
        "Earth Shard",
        "Zombie Commander Whip",
        "Machine Gun",
        "Sniper Bow",
        "Soulstealer Bow",
        "Cutlass",
        "Silent Death",
        "Training Weight",
        "Health Potion VIII",
        "Health Potion 8",
        "Beating Heart",
        "Premium Flesh",
        "Mimic Fragment",
        "Enchanted Rotten Flesh",
        "Enchanted Bone",
        "Defuse Kit",
        "Enchanted Ice",
        "Optic Lens",
        "Tripwire Hook",
        "Button",
        "Carpet",
        "Lever",
        "Sign",
        "Diamond Atom"
    ]
}, "config/autosell.json")