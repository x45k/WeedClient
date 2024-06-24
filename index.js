import "./Commands/hclip"
import "./Commands/tpclip"
import "./Commands/vclip"
import "./Commands/ConfigGUI"

import "./Features/PartyBlacklist"
import "./Features/AutoGFS"
import "./Features/ToggleSprint"
import "./Features/AutoTerms"
import "./Features/TerminalSolver"
import "./Features/deathmessages"

register("worldLoad", () => {
    ChatLib.chat("&2[WEED CLIENT] &7loading...")
    ChatLib.chat("&2[WEED CLIENT] &7loaded!")
});
