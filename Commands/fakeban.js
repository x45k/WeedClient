function fakeBan(reason) {
    const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText")
  
    function makeid() {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < 8; i++) {
          result += characters.charAt(Math.floor(Math.random() *
              charactersLength));
      }
      return result;
    }
                  Client.getMinecraft().func_147114_u().func_147298_b().func_150718_a(new ChatComponentText(
                    "§cYou are temporarily banned for §f359d 23h 59m 59s§c from this server!\n\n" + 
                    `§7Reason: §r${reason}\n` + 
                    "§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#"
                     + makeid() + 
                     "\n§7Sharing your Ban ID may affect the processing of your appeal!"))
}

register("command", (args) => {
    fakeBan(args.toString())
}).setName('fakeban')