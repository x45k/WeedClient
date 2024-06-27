import "./Commands/hclip"
import "./Commands/tpclip"
import "./Commands/vclip"
import "./Commands/ConfigGUI"
import "./Commands/crash"
import "./Commands/setwindowname"
import "./Commands/skycrypt"
import "./Commands/printWorld"

import "./Features/PartyBlacklist"
import "./Features/AutoGFS"
import "./Features/deathmessages"
import "./Features/ghostblocks"
import "./Features/loading"
import "./Features/RngAnnounce"
import "./Features/WarpAssurance"
import "./Features/CopyChat"
import "./Features/ghostblocksforf7"
import "./Features/enderchestsforf7"
import "./Features/blocksforf7"
import "./Features/autoalignment"
import "./Features/warponplayerkick"
import "./Features/autoarrowpurchase"
import "./Features/f7automessages"
import "./Features/vanqnotifier"
import "./Features/watcher"
import "./Features/hidelightning"
import "./Features/kuudraClass"
import "./Features/lividsolver"
import "./Features/blessingmessagehider"
import "./Features/fairysoulwaypoints"
import "./Features/hidetermgui"


import { createWaypoint } from "./utils/utils"

register("renderWorld", () => {
    createWaypoint("Dungeon Hub", "Test", 0.5, 0.12, 0.8, 0, 124, 0)
})
