import "./Commands/hclip"
import "./Commands/tpclip"
import "./Commands/vclip"
import "./Commands/ConfigGUI"
import "./Commands/crash"
import "./Commands/setwindowname"

import "./Features/PartyBlacklist"
import "./Features/AutoGFS"
import "./Features/AutoTerms"
import "./Features/deathmessages"
import "./Features/ghostblocks"
register("worldLoad", () => {
    ChatLib.chat("&2[WEED CLIENT] &7loading...")
    ChatLib.chat("&2[WEED CLIENT] &7loaded!")
});