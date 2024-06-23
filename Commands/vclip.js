register("command", (y,d) => {
  // GETTING VARIABLES
  ya = Player.getYaw()
  pi = Player.getPitch()
  px = Player.getX()
  py = Player.getY()
  pz = Player.getZ()
  y = y*1

  // THE CLIPPING FUNCTION
  if (y && d) {
    new Thread(() => {
      Thread.sleep(d)
      Client.getMinecraft().func_71410_x().field_71439_g.func_70107_b(px,py+y,pz)
    }).start()
  } else if (y) {
    Client.getMinecraft().func_71410_x().field_71439_g.func_70107_b(px,py+y,pz)
  }
}).setName("vclipbo")