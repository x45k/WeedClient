import config from "../Config"

if (config().f7p4automessage) { 
    register("chat", () => {
        {ChatLib.command(`pc ${config().f7p4custommessage}`)}
        setTitle('sent message for p4!', "", 10, 100, 10, 66)
    }).setCriteria("[BOSS] Necron: Finally, I have heard so much about you. The Eye likes you very much.")
}

if (config().f7p3automessage) { 
    register("chat", () => {
        {ChatLib.command(`pc ${config().f7p3custommessage}`)}
        setTitle('sent message for p3!', "", 10, 100, 10, 66)
    }).setCriteria("[BOSS] Goldor: Who dares trespass into my domain?")
}

if (config().f7p2automessage) {
    register("chat", () => {
        {ChatLib.command(`pc ${config().f7p2custommessage}`)}
        setTitle('sent message for p2!', "", 10, 100, 10, 66)
    }).setCriteria("[BOSS] Storm: I'd be happy to show you what that's like!")
}

if (config().f7p1automessage) { 
    register("chat", () => {
        {ChatLib.command(`pc ${config().f7p1custommessage}`)}
        setTitle('sent message for p1!', "", 10, 100, 10, 66)
    }).setCriteria("[BOSS] Maxor: WELL WELL WELL LOOK WHO'S HERE!")
}