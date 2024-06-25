register("command", (name) => {

    const Desktop = Java.type('java.awt.Desktop');
    const URI = Java.type('java.net.URI');
    Desktop.getDesktop().browse(new URI(`https://sky.shiiyu.moe/stats/${name}`));
    ChatLib.chat(`Opening ${name + (name[name.length - 1] === 's' ? "'" : "'s")} SkyCrypt profile!`);
}).setName("skycrypt")