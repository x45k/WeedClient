import "./Commands/hclip"
import "./Commands/tpclip"
import "./Commands/vclip"
import "./Commands/ConfigGUI"
import "./Commands/crash"
import "./Commands/setwindowname"

import "./Features/PartyBlacklist"
import "./Features/AutoGFS"
<<<<<<< HEAD
import "./Features/AutoTerms"
=======
>>>>>>> 550e2adf4116ecd424ec8d9bd5e352d50bd0a379
import "./Features/deathmessages"
import "./Features/ghostblocks"
register("worldLoad", () => {
    ChatLib.chat("&2[WEED CLIENT] &7loading...")
    ChatLib.chat("&2[WEED CLIENT] &7loaded!")
});