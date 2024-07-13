import config from "../Config"

register("chat", () => {
    if (config().onBloodFull) {
        ChatLib.command(`pc ${config().bloodFullMessage}`);
        setTitle('BLOOD ROOM HAS BEEN CLEARED!', "", 0, 25, 5, 70);
    }
}).setCriteria("[BOSS] The Watcher: You have proven yourself. You may pass.");

register("chat", () => {
    if (config().onBloodClear) {
        setTitle('BLOOD ROOM IS FULL!', "", 0, 25, 5, 70);
        ChatLib.command(`pc ${config().bloodClearedMessage}`);
    }
}).setCriteria("[BOSS] The Watcher: That will be enough for now.");