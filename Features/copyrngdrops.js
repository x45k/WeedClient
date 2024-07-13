import config from "../Config"

if (config().copySuperRareDrops) {
    if (formatted.startsWith("§r§d§lCRAZY RARE DROP! ") || formatted.startsWith("§r§c§lINSANE DROP! ") || formatted.startsWith(
            "§r§6§lPET DROP! "
        ) || formatted.contains(" §r§ehas obtained §r§6§r§7[Lvl 1]")
    ) {
        var messageToCopy = unformatted;
        java.awt.Toolkit.getDefaultToolkit().getSystemClipboard().setContents(new java.awt.datatransfer.StringSelection(messageToCopy), null);
        UChat.chat("Copied drop to clipboard.")
    }
}
if (config().copyRareDrops) {
    if (formatted.startsWith("§r§9§lVERY RARE DROP! ") || formatted.startsWith("§r§5§lVERY RARE DROP! ")) {
        var messageToCopy = unformatted;
        java.awt.Toolkit.getDefaultToolkit().getSystemClipboard().setContents(new java.awt.datatransfer.StringSelection(messageToCopy), null);
        ChatLib.chat("Copied drop to clipboard.")
    }
}