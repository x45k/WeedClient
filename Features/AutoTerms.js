/* /// <reference types="../../CTAutocomplete" />
import Config from "../Config"
import { settings } from "../commands/gui"

const colorReplacements = {
    "light gray": "silver",
    "wool": "white",
    "bone": "white",
    "ink": "black",
    "lapis": "blue",
    "cocoa": "brown",
    "dandelion": "yellow",
    "rose": "red",
    "cactus": "green"
}
const colorOrder = [1, 4, 13, 11, 14]
const isEnchanted = (slot) => Player.getContainer()?.getStackInSlot(slot)?.isEnchanted()
const getInvItemsTo = (endIndex) => Array.from(Array(endIndex).keys()).filter(a => Player.getContainer().getStackInSlot(a))
const filterPanesWithMeta = (array, meta) => array.filter(a => Player.getContainer().getStackInSlot(a).getRegistryName() == "minecraft:stained_glass_pane" && Player.getContainer().getStackInSlot(a).getMetadata() == meta) 
const filterPanesWithoutMeta = (array, meta) => array.filter(a => Player.getContainer().getStackInSlot(a).getRegistryName() == "minecraft:stained_glass_pane" && Player.getContainer().getStackInSlot(a).getMetadata() !== meta) 
const getStackFromIndex = (index) => Player.getContainer().getStackInSlot(index)
const sortStackSize = (array) => array.sort((a, b) => getStackFromIndex(a).getStackSize() - getStackFromIndex(b).getStackSize())
const fixColor = (itemName) => {
  Object.keys(colorReplacements).map(a => itemName = itemName.toLowerCase().replace(new RegExp(`^${a}`), colorReplacements[a]))
  return itemName
}
const sv = 20

let inTerm = false
let q = []
going = false
function clickQueue() {
  going = true
}
const C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow")
windowId = null
counter = 0
register("step", () => {
  if (!going) return
  inv = Player.getContainer()
  let wi = inv.getWindowId()
  if (windowId == null) windowId = wi
  try {
    Client.sendPacket(new C0EPacketClickWindow(windowId, q[counter], 0, 0, null, 0))
  } catch (error) {}
  windowId++
  // if (Config.autoClickType == 0) {
  //   try {
  //     inv.click(q[counter],false,"LEFT")
  //   } catch (error) {}
  // } else if (Config.autoClickType == 1) {
  //   try {
  //     inv.click(q[counter],false,"MIDDLE")
  //   } catch (error) {}
  // } else if (Config.autoClickType == 2) {
  //   try {
  //     inv.click(q[counter],true,"LEFT")
  //   } catch (error) {}
  // }
  console.log(q[counter])
  counter++
  if (counter >= q.length) {
    counter = 0
    going = false
    q = []
    inTerm = false
  }
}).setFps(1000/Config.autoTermDelay)

register('tick', () => {
  if (settings.Dungeons[2] && !inTerm) {
    let inv = Player.getContainer();
    let n = inv.getName();
    // "Correct all the panes!"
    if (n == "Correct all the panes!") {
      if (Config.panes) {
        inTerm = true
        tobesolved = filterPanesWithMeta(getInvItemsTo(45), 14)
        q = tobesolved
        clickQueue()
      }
    }
    //rubix
    if (n == "Change all to same color!") {
      if (Config.rubix) {
        inTerm = true
        tobesolved = colorOrder.map((v, i) => filterPanesWithoutMeta(getInvItemsTo(45), 15).map(a => Array(Math.abs(colorOrder.length-1 - (colorOrder.indexOf(inv.getStackInSlot(a).getMetadata())+i)%colorOrder.length)).fill(a)).reduce((a, b) => a.concat(b), [])).sort((a, b) => a.length - b.length)[0]
        for (let i = 0; i < tobesolved.length; i++) {
          q.push(tobesolved[i])
        }
        clickQueue()
      }
    }
    // Numbers
    if (n == "Click in order!") {
      if (Config.numbers) {
        inTerm = true
        setTimeout(() => {
          tobesolved = correctSlots = sortStackSize(filterPanesWithMeta(getInvItemsTo(35), 14))
          for (let i = 0; i < tobesolved.length; i++) {
              q.push(tobesolved[i])
          }
          clickQueue()
        },100)
      }
    }
    if (n.startsWith("What starts with:")) {
      if (Config.startswith) {
        inTerm = true
        setTimeout(() => {
          let letter = n.match(/What starts with: '(\w+)'?/)[1].toLowerCase()
          tobesolved = getInvItemsTo(45).filter(a => inv.getStackInSlot(a).getName().removeFormatting().toLowerCase().startsWith(letter)).filter(a => !isEnchanted(a))
          for (let i = 0; i < tobesolved.length; i++) {
            q.push(tobesolved[i])
            //console.log(tobesolved[i])
          }
          clickQueue()
        },100)
      }
    }
    if (n.startsWith("Select all the")) {
      if (Config.selectallthe) {
        inTerm = true
        setTimeout(() => {
          let color = n.match(/Select all the (.+) items!/)[1].toLowerCase()
          tobesolved = getInvItemsTo(45).filter(a => fixColor(inv.getStackInSlot(a).getName().removeFormatting().toLowerCase()).startsWith(color)).filter(a => !isEnchanted(a))
          for (let i = 0; i < tobesolved.length; i++) {
            q.push(tobesolved[i])
            //console.log(tobesolved[i])
          }
          clickQueue()
        },100)
      }
    }
  }
});

// TERM CLOSED
register('GuiClosed', () => {
  if (inTerm) { 
    inTerm = false
    q = []
  }
}); */