importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.java.lang.reflect);

// Function to display a message in the chat
function chat(message) {
    ChatLib.chat(message);
  }
  
  register("command", (windowName) => {
    if (!windowName) {
      chat("Usage: /setwindowname <name>");
      return;
    }
    
    // Construct a formatted message to display in the chat
    const formattedMessage = `Window Title: ${windowName}`;
    org.lwjgl.opengl.Display.setTitle(`${windowName}`)
    chat(formattedMessage);
  })
    .setName("setwindowname");
  