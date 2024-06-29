importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.java.lang.reflect);
import { data } from "../utils/data"

function chat(message) {
    ChatLib.chat(message);
  }
  
  register("command", (windowName) => {
    data.windowNamee = windowName
    if (!windowName) {
      chat("Usage: /setwindowname <name>");
      return;
    }

    const formattedMessage = `Window Title: ${windowName}`;
    org.lwjgl.opengl.Display.setTitle(`${windowName}`)
    data.save()
    chat(formattedMessage);
  })
    .setName("setwindowname");