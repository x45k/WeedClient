import config from "../Config"

register("tick", () => {
    if (config.testingForKuudraMultiBox.autoSpecialistv2) return
    ChatLib.chat('multibox is fucking working bitch')
})