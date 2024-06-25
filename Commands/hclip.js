register("command", (d, o) => {
    let yaw = Player.getYaw();
    let px = Player.getX();
    let py = Player.getY();
    let pz = Player.getZ();

    let yawRad = Math.PI * yaw / 180;

    let newx = -Math.sin(yawRad) * d;
    let newz = Math.cos(yawRad) * d;

    o = parseFloat(o);

    if (o) {
        Client.getMinecraft().field_71439_g.func_70107_b(px + newx, py + o, pz + newz);
    } else {
        Client.getMinecraft().field_71439_g.func_70107_b(px + newx, py, pz + newz);
    }
}).setName("hclipbo").setAliases(["hclip", "hc"])
