import Dungeon from "../../../BloomCore/dungeons/Dungeon"
import { data } from "../../gui";
import { renderBoxWithText } from "../../utils/utils"

const locations = [
  [37, 15, 44, 'decoy'],
  [90, 12, 100, 'decoy'],
  [28, 6, 50, 'gyro'],
  [21, 12, 88, 'decoy'],
  [34, 6, 46, 'gyro'],
  [21, 12, 53, 'decoy'],
  [25, 6, 83, 'gyro'],
  [85, 6, 101, 'gyro'],
  [27, 16,94, 'green'],
  [23, 21, 54, 'red'],
  [84, 20, 59, 'orange'],
  [85, 20, 98, 'blue'],
  [56, 20, 124, 'purple']
];

register("renderWorld", () => {
        if (!Config.m7Spots && Dungeon.floorNumber !== 7) return
        createWaypoint("Dungeons", "Decoy", 128, 0, 128, 37, 15, 44)
        createWaypoint("Dungeons", "Decoy", 128, 0, 128, 90, 12, 100)
        createWaypoint("Dungeons", "Decoy", 128, 0, 128, 21, 12, 88)
        createWaypoint("Dungeons", "Decoy", 128, 0, 128, 21, 12, 53)
        createWaypoint("Dungeons", "Gyro", 128, 0, 128, 28, 6, 50)
        createWaypoint("Dungeons", "Gyro", 128, 0, 128, 34, 6, 46)
        createWaypoint("Dungeons", "Gyro", 128, 0, 128, 25, 6, 83)
        createWaypoint("Dungeons", "Gyro", 128, 0, 128, 85, 6, 101)
        createWaypoint("Dungeons", "Green", 0, 255, 0, 85, 6, 101)
        createWaypoint("Dungeons", "Red", 255, 0, 0, 85, 6, 101)
        createWaypoint("Dungeons", "Orange", 255, 165, 0, 85, 6, 101)
        createWaypoint("Dungeons", "Blue", 0, 0, 256, 85, 6, 101)
        createWaypoint("Dungeons", "Purple", 128, 0, 128, 85, 6, 101)
})