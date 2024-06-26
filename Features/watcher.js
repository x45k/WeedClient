import Config from "../Config"

register("chat", () => {
    if (Config.onBloodFull) {
        ChatLib.command(`pc ${Config.bloodFullMessage}`);
        setTitle('BLOOD ROOM HAS BEEN CLEARED!', "", 0, 25, 5, 70);
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.");

register("chat", () => {
    if (Config.onBloodClear) {
        setTitle('BLOOD ROOM IS FULL!', "", 0, 25, 5, 70);
        ChatLib.command(`pc ${Config.bloodClearedMessage}`);
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.");