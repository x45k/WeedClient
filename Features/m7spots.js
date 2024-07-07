import Dungeon from "../../BloomCore/dungeons/Dungeon"
import Config from "../Config"
import { createWaypoint } from "../utils/utils"

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