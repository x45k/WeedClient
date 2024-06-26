import Config from "../Config"

if (Config.f7p2automessage) {
    register("chat", () => {
        {ChatLib.command(`pc ${Config.f7p2custommessage}`)}
        setTitle(`sent message for p2!`, "", 10, 100, 10, 69)
    }).setCriteria("[BOSS] Storm: I'd be happy to show you what that's like!")
}