import config from "../Config"

let ffCountdownTo = 0;

register("chat", () => {
    ffCountdownTo = Date.now() + 5000;
    let countdown = 5;

    if (!config().ffTimer) return;

    let countdownInterval = setInterval(() => {
        if (countdown > 0) {
            ChatLib.chat(countdown + " seconds til ff");
            countdown--;
        } else {
            ChatLib.chat("Go!");
            clearInterval(countdownInterval);
        }
    }, 1000);

}).setChatCriteria("[BOSS] The Professor: Oh? You found my Guardians' one weakness?");