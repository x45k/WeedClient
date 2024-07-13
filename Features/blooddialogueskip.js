import config from "../Config"

let startTimer = null;
let clearBloodTimer = null;
let textXClearBlood = null;

register("chat", () => {
  if (!config().bloodDialogueSkip) return;
  const currentTime = Date.now();

  if (startTimer === null) {
    startTimer = currentTime;
  }

  if (startTimer !== null) {
    const countdownDuration = 23850;
    const timeElapsed = currentTime - startTimer;

    if (timeElapsed >= countdownDuration) {
      if (!clearBloodTimer) {
        clearBloodTimer = currentTime + 5000;
        textXClearBlood = null;
      }

      if (currentTime >= clearBloodTimer) {
        Client.showTitle('CLEAR BLOOD!', "", 10, 100, 10);
      }
    }
  }
}).setChatCriteria("[BOSS] The Watcher: Things feel a little more roomy now, eh?");