import Config from "../Config"

register("chat", () => {
    if (Config.vanqNotifier) {
        let player = Player.get();
        let message = `Vanquisher Spawned At ${player.getX().toFixed(0)}, ${player.getY().toFixed(0)}, ${player.getZ().toFixed(0)}`;
        ChatLib.command(`pc ${message}`);
        setTitle('VANQUISHER HAS SPAWNED!', "", 10, 100, 10, 66);
    }
}).setCriteria("A Vanquisher is spawning nearby!");
