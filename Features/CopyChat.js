import Config from "../Config";

register("chat", (event) => {
    if (!Config.enableCopyChat || ChatLib.getChatMessage(event) == " ") return

    let chat = new Message()
    chat.addTextComponent(new TextComponent(EventLib.getMessage(event)).setHover("show_text", "&2&lCOPY").setClick("run_command", `/ct copy ${ChatLib.getChatMessage(event).removeFormatting()}`))
    cancel(event)
    ChatLib.chat(chat)
})