importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.java.lang.reflect);
import data from "../utils/data"

function chat(message) {
    ChatLib.chat(message);
  }
  
  register("command", (windowName) => {
    if (!windowName) {
      chat("Usage: /setwindowname <name>");
      return;
    }
    
  data.windowNamee = `${windowName}`
  data.save()

    const formattedMessage = `Window Title: ${windowName}`;
    org.lwjgl.opengl.Display.setTitle(`${windowName}`)
    chat(formattedMessage);
  })
    .setName("setwindowname");
  