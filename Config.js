import { Color, padText } from "../BloomCore/utils/Utils";
import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
    @SliderProperty,
    @NumberProperty,
} from '../Vigilance/index';

@Vigilant("WeedClient", "§2Weed §aClient", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "Solvers", "Floor 7", "Kuudra", "Gui", "Party Finder"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)

        this.addDependency("Announce to guild", "Rng Announcer")
        this.addDependency("Death Message Text","Dungeons Death Messages")
        this.addDependency("Party Blacklist","Enable Blacklist")
        this.addDependency("No Key Notifier","Kuudra Notifier")
        this.addDependency("Supply Crates Notifier","Kuudra Notifier")
        this.addDependency("Fuel Cells Notifier","Kuudra Notifier")
        this.addDependency("Kuudra Stunned Notifier","Kuudra Notifier")

        const lines = [
            "",
            "&a/setwindowname <name> &f- &2Sets the name of your minecraft window.",
            "&a/hc <blocks> &f- &2Moves player horizontally a set number of blocks.",
            "&a/vc <blocks> &f- &2Moves player vertically a set number of blocks.",
            "&a/tpc <x y z> &f- &2Moves player in any direction based on set coordinates.",
            "&aGhost blocks &f- &2Deletes blocks infront of you &c(Set key in controls).",
            "&a/crash &f- &2givs infinit vbuks.",
            "&a/skycrypt &f- &2Automatically opens up the skycrypt page of the specified user.",
            ""
        ]
        const maxLength = Math.max(...lines.map(a => Renderer.getStringWidth(a)))

        this.setCategoryDescription("General", 
            `
            &a&l&nWeed!

            ${lines.map(a => a !== "" ? padText(a + "&0", ".", maxLength) : a).join("\n")}

            &2GreenV1 & x45k are very cool and cool
            `
        )

    }

   /*
    Example UI elements!
        @SwitchProperty({
        name: "Hide Lightning",
        description: "Stops lightning from being rendered.",
        category: "General",
        subcategory: "Lightning"
    })
    hideLightning = false

    @SliderProperty({
        name: "Delay",
        description: "Delay before accepting the party invite.",
        category: "General",
        subcategory: "Reparty",
        min: 0,
        max: 1000
    })
    autoRejoinRepartyDelay = 500;

    @ButtonProperty({
        name: "Move Toggle Sprint",
        description: "Move",
        category: "General",
        subcategory: "Toggle Sprint"
    })
    MoveToggleSprint() {
         this.toggleSprintMove.open()
    };

    @TextProperty({
        name: "Sprinting Enabled Text",
        category: "The text to be showed when toggle sprint is enabled",
        category: "General",
        subcategory: "Toggle Sprint",
        placeholder: "Sprinting Enabled"
    })
    toggleSprintText = "";

    @SelectorProperty({
        name: "Highlight Type",
        description: "How to highlight the block for the etherwarp overlay.",
        category: "General",
        subcategory: "Etherwarp",
        options: [
            "Edges",
            "Edges (Phase)",
            "Filled",
            "Filled (Phase)",
            "Both",
            "Both (Phase)"
        ]
    })
    etherwarpHighlightType = 0;

    @ColorProperty({
        name: "Overlay Color",
        description: "The color of the overlay when a valid etherwarp spot is found.",
        category: "General",
        subcategory: "Etherwarp"
    })
    etherwarpOverlayColor = new Color(0, 1, 0, 1);

   */

    // ---------------------------------------------------------------
    // General

    @SwitchProperty({
        name: "Auto GFS",
        description: "Automatically gets pearls from sacks if you run out.",
        category: "General",
        subcategory: "Auto GFS"
    })
    enableAutoGfs = false;

    @SwitchProperty({
        name: "Loading Messages",
        description: "Enable/disable the [WEED CLIENT] loading... messages.",
        category: "General",
        subcategory: "Loading"
    })
    enableloadingmessages = false;

    @SwitchProperty({
        name: "Copy Chat",
        description: "Allows you to copy chat by holding left Ctrl + LMB",
        category: "General",
        subcategory: "Copy Chat"
    })
    enableCopyChat = false;

    // ---------------------------------------------------------------
    // Dungeons

    @SwitchProperty({
        name: "Dungeons Death Messages",
        description: "Send a message in partychat when someone dies in a dungeon",
        category: "Dungeons",
        subcategory: "General"
    })
    deathMessage = false;

    @TextProperty({
        name: "Death Message Text",
        description: "The text sent on dungeon death.\nUse {name} to use the dead player's name.\nUse a comma to use many messages.",
        category: "Dungeons",
        subcategory: "General",
        placeholder: "rip bozo"
    })
    deathMessageText = "rip bozo";

    @SwitchProperty({
        name: "Rng Announcer",
        description: "Announces drops from RNG Meter to your party.",
        category: "Dungeons",
        subcategory: "RNG Announcing"
    })
    enableRngAnnounce = false;

    @SwitchProperty({
        name: "Announce to guild",
        description: "Also announce RNG Meter drops to you guild. (Requires Rng Announcer to be on!)",
        category: "Dungeons",
        subcategory: "RNG Announcing"
    })
    enableGuildRngAnnounce = false;

    @SwitchProperty({
        name: "Warp Assurance",
        description: "Warps party when dungeon countdown starts.",
        category: "Dungeons",
        subcategory: "Warping"
    })
    enableWarpAssurance = false;

    @SwitchProperty({
        name: "Warp On Player Kick",
        description: "Warps a player back to a dungeon when they are disconnected. (Will not work if the player got limboed!)",
        category: "Dungeons",
        subcategory: "Warping"
    })
    warpOnPlayerKick = false;

    // ---------------------------------------------------------------
    // Solvers

    // ---------------------------------------------------------------
    // Floor 7

    @SwitchProperty({
        name: "Auto Align",
        description: "Automatically clicks the amount of times needed in the alignment device in F7 P3.",
        category: "Floor 7",
        subcategory: "Auto Devices"
    })
    autoAlign = false;

    @SwitchProperty({
        name: "Clip Ghost Blocks",
        description: "Automatically places ghost blocks for you to clip to the next phase of floor 7. (MAY SHOW UP WHILE CLEARING ROOMS, THIS WILL BE FIXED EVENTUALLY)",
        category: "Floor 7",
        subcategory: "Misc"
    })
    clipGhostBlocks = false;

    // ---------------------------------------------------------------
    // Kuudra

    @SwitchProperty({
        name: "Kuudra Notifier",
        description: "Notifies you about chosen alerts during the kuudra boss.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraNotifier = false;

    @SwitchProperty({
        name: "No Key Notifier",
        description: "Notifies you when you do not have a key during kuudra.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraNoKeyNotifier = false;

    @SwitchProperty({
        name: "Supply Crates Notifier",
        description: "Notifies you when supply crates have dropped.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraSupplyCratesNotifier = false;

    @SwitchProperty({
        name: "Fuel Cells Notifier",
        description: "Notifies you when fuel cells have dropped.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraFuelCellsNotifier = false;

    @SwitchProperty({
        name: "Kuudra Stunned Notifier",
        description: "Notifies you when kuudra has been stunned.",
        category: "Kuudra",
        subcategory: "Notifiers"
    })
    kuudraStunnedNotifier = false;

    // ---------------------------------------------------------------
    // GUI

    // ---------------------------------------------------------------
    // Party Finder

    @SwitchProperty({
        name: "Enable Blacklist",
        description: "Kicks players who's names are added to the blacklist.",
        category: "Party Finder",
        subcategory: "Blacklist"
    })
    enableBlacklist = false;

    @TextProperty({
        name: "Party Blacklist",
        description: "Auto kicks names that you choose, separated by spaces.",
        category: "Party Finder",
        subcategory: "Blacklist",
        placeholder: ""
    })
    playerBlacklistNames = "";
    
}
export default new Config()