import config from '../config'
import { isInDungeon } from '../utils/utils'

register('chat', (name, event) => {
    if (!isInDungeon() || !config.deathMessage) return
    const message = ChatLib.getChatMessage(event)
    if (message.includes('reconnected') || message.includes('Cata Level')) return
    if ((message.includes('You') || message.includes(Player.getName()))) return

    let text = config.deathMessageText
    if (text.includes('{name}')) {
        text = text.replace(/{name}/g, name)
    }
    ChatLib.command(`partychat ${text}`)
}).setCriteria(/^ ☠ (\S+) .+/)