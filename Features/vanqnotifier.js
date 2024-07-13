import Config from "../unusedconfig"

register("chat", () => {
    if (Config.vanqNotifier) {
        let message = `Vanquisher Spawned At ${Player.getX().toFixed(0)}, ${Player.getY().toFixed(0)}, ${Player.getZ().toFixed(0)}`;
        ChatLib.command(`pc ${message}`);
        Client.showTitle('VANQUISHER HAS SPAWNED!', "", 10, 100, 10);
    }
}).setCriteria("A Vanquisher is spawning nearby!");
