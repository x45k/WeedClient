import Config from "../Config";

register("chatComponentClicked", (message) => {
    if (!Config.enableCopyChat) return
    if (!Keyboard.isKeyDown(Keyboard.KEY_LCONTROL)) return
    const copyString = message.getText().removeFormatting()
    ChatLib.command(`ct copy ${copyString}`, true)
    ChatLib.chat("&3Copied message!")
})

