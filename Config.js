import Settings from "../Amaterasu/core/Settings"
import DefaultConfig from "../Amaterasu/core/DefaultConfig"
const config = new DefaultConfig("Weed Client", "data/settings.json")
const schemePath = "data/ColorScheme.json"

export const myGui = new Gui()

const CHANGELOG = `# §bWeed Client v1.1.0\n ${FileLib.read("WeedClient", "changelog.md")}`

config
// General
.addKeybind({
    category: "General",
    configName: "ghostKeybind",
    title: "Ghost Bind",
    description: "The keybind to create ghost blocks (CURRENTLY DOES NOT WORK DUE TO AMATERASU NOT FULLY FINISHING THIS FEATURE)"
})
.addSwitch({
    category: "General",
    configName: "enableAutoGfs",
    title: "Auto GFS",
    description: "Gets specified items from your sacks.",
    subcategory: "Auto GFS",
})
.addSwitch({
    category: "General",
    configName: "enableAutoGfsPearls",
    title: "Auto GFS Pearls",
    description: "Automatically gets pearls from sacks if you run out.",
    subcategory: "Auto GFS",
    shouldShow(config) {
        return config.enableAutoGfs
    }
})
.addSwitch({
    category: "General",
    configName: "enableAutoGfsJerrys",
    title: "Auto GFS Jerrys",
    description: "Automatically gets inflatable jerrys from sacks if you run out.",
    subcategory: "Auto GFS",
    shouldShow(config) {
        return config.enableAutoGfs
    }
})
.addSwitch({
    category: "General",
    configName: "enableAutoGfsJerrys",
    title: "Auto GFS Decoys",
    description: "Automatically gets decoys from sacks if you run out.",
    subcategory: "Auto GFS",
    shouldShow(config) {
        return config.enableAutoGfs
    }
})
.addSwitch({
    category: "General",
    configName: "enableloadingmessages",
    title: "Loading Messages",
    description: "Enable/disable the [WEED CLIENT] loading... messages.",
    subcategory: "Loading"
})
.addSwitch({
    category: "General",
    configName: "enableCopyChat",
    title: "Copy Chat",
    description: "Allows you to copy chat by holding left Ctrl + LMB",
    subcategory: "Copy Chat"
})
.addSwitch({
    category: "General",
    configName: "copyDrops",
    title: "Copy Drops",
    description: "Copies rarer drops to clipboard.",
    subcategory: "Copy Chat"
})
.addSwitch({
    category: "General",
    configName: "copyRareDrops",
    title: "Copy Rare Drops",
    description: "Copies rare drops to clipboard.",
    subcategory: "Copy Chat",
    shouldShow(config) {
        return config.copyDrops
    }
})
.addSwitch({
    category: "General",
    configName: "copySuperRareDrops",
    title: "Copy Super Rare Drops",
    description: "Copies super rare drops to clipboard.",
    category: "General",
    subcategory: "Copy Chat",
    shouldShow(config) {
        return config.copyDrops
    }
})
.addSwitch({
    category: "General",
    configName: "autoPurchaseArrows",
    title: "Auto Purchase Arrows",
    description: "Automatically purchases arrows from Ophelia or the Weaponsmith",
    subcategory: "Misc"
})
.addSwitch({
    category: "General",
    configName: "autoHarp",
    title: "Auto Harp",
    description: "Automatically completes melodys harp (many thanks to azaelmew)",
    subcategory: "Misc"
})
.addSwitch({
    category: "General",
    configName: "showSouls",
    title: "Fairy Souls",
    description: "Show waypoints to fairy souls [AUTO UPDATES]\n&4&lMay not show waypoints if souls are not rendered.",
    subcategory: "Fairy Souls"
})

// ---------------------------------------------------------------
// Dungeons

.addSwitch({
    category: "Dungeons",
    configName: "barPhase",
    title: "Bar Phase",
    description: "Automatically clips you through iron bars (may flag watchdog, only use if you feel risky, this will be fixed eventually when im not lazy)",
    subcategory: "Bar Phase"
})
.addSwitch({
    category: "Dungeons",
    configName: "ffTimer",
    title: "Fire Freeze Timer",
    description: "Notifies you when to fire freeze in the m3 boss fight",
    subcategory: "M3"
})
.addSwitch({
    category: "Dungeons",
    configName: "autoRejoinDungeons",
    title: "Auto Rejoin",
    description: "Auto rejoins dungeons when they end (many thanks to xef addons)",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "bloodDialogueSkip",
    title: "Blood Dialogue Skip",
    description: "Notifies you when to clear blood to skip the dialogue from the watcher",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "deathMessage",
    title: "Dungeons Death Messages",
    description: "Send a message in partychat when someone dies in a dungeon",
    subcategory: "General"
})
.addTextInput({
    category: "Dungeons",
    configName: "deathMessageText",
    title: "Death Message Text",
    description: "The text sent on dungeon death. Use {name} to use the dead player's name (many thanks to azuredclient)",
    subcategory: "General",
    placeholder: "rip bozo",
    shouldShow(config) {
        return config.deathMessage
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "enableRngAnnounce",
    title: "Rng Announcer",
    description: "Announces drops from RNG Meter to your party",
    subcategory: "RNG Announcing"
})
.addSwitch({
    category: "Dungeons",
    configName: "enableGuildRngAnnounce",
    title: "Announce to guild",
    description: "Also announce RNG Meter drops to you guild (requires rng announcer to be on!)",
    subcategory: "RNG Announcing"
})
.addSwitch({
    category: "Dungeons",
    configName: "enableWarpAssurance",
    title: "Warp Assurance",
    description: "Warps party when dungeon countdown starts",
    subcategory: "Warping"
})
.addSwitch({
    category: "Dungeons",
    configName: "warpOnPlayerKick",
    title: "Warp On Player Kick",
    description: "Warps a player back to a dungeon when they are disconnected (will not work if the player got limboed!)",
    subcategory: "Warping"
})
.addSwitch({
    category: "Dungeons",
    configName: "enableBloodMessages",
    title: "Blood Messages",
    description: "Sends a message when either blood is full, blood has been cleared, or both",
    subcategory: "Blood Room"
})
.addSwitch({
    category: "Dungeons",
    configName: "onBloodFull",
    title: "On Blood Full",
    description: "Sends a message when blood has filled",
    subcategory: "Blood Room",
    shouldShow(config) {
        return config.enableBloodMessages
    }
})
.addTextInput({
    category: "Dungeons",
    configName: "bloodFullMessage",
    title: "Blood Full Message",
    description: "Message that is sent when blood becomes full",
    subcategory: "Blood Room",
    placeholder: "blood has been cleared hurry up and go in",
    shouldShow(config) {
        return config.onBloodFull
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "onBloodClear",
    title: "On Blood Cleared",
    description: "Sends a message when blood has been cleared",
    subcategory: "Blood Room",
    shouldShow(config) {
        return config.enableBloodMessages
    }
})
.addTextInput({
    category: "Dungeons",
    configName: "bloodClearedMessage",
    title: "Blood Cleared Message",
    description: "Message that is sent when blood is cleared",
    subcategory: "Blood Room",
    placeholder: "blood is full go clear it fuckers",
    shouldShow(config) {
        return config.onBloodClear
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "lividSolver",
    title: "Livid Finder",
    description: "Finds the correct livid for you (many thanks to bloom)",
    subcategory: "Finders"
})
.addSwitch({
    category: "Dungeons",
    configName: "hideBlessings",
    title: "Blessings Hider",
    description: "Hides the messages when a player obtains a blessing",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "blessingNotifier",
    title: "Blessings Notifier",
    description: "Notifies you when a player obtains a blessing",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "felWaypoints",
    title: "Fel Waypoints",
    description: "Gives waypoints for fels in dungeons",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "secretAura",
    title: "Secret Aura",
    description: "Automatically clicks secrets when they are in range (MAY BAN, UNSURE) (currently doesnt work, so no point in turning this on)",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "autoArchitectDraft",
    title: "Auto Architects Draft",
    description: "Automatically grabs a draft from your sacks when a puzzle is failed",
    subcategory: "General"
})
.addSwitch({
    category: "Dungeons",
    configName: "hideSoulweaverSkulls",
    title: "Hide Soulweavers Skulls",
    description: "Hides the skulls spawned by the soulweavers gloves",
    subcategory: "General"
})

// ---------------------------------------------------------------
// Floor 7

.addSwitch({
    category: "Floor 7",
    configName: "termHighlight",
    title: "Terminal Highlighter",
    description: "Highlights terminals in F7P3",
    subcategory: "Terminals"
})
.addSwitch({
    category: "Floor 7",
    configName: "autoAlign",
    title: "Auto Align",
    description: "Automatically clicks the amount of times needed in the alignment device in F7 P3 (DOES NOT WORK!)",
    subcategory: "Auto Devices"
})
.addSwitch({
    category: "Floor 7",
    configName: "clipGhostBlocks",
    title: "Clip Ghost Blocks",
    description: "Automatically places ghost blocks for you to clip to the next phase of floor 7 (this has over 4k blocks!) (MAY SHOW UP WHILE CLEARING ROOMS, THIS WILL BE FIXED EVENTUALLY)",
    subcategory: "Misc"
})
.addSwitch({
    category: "Floor 7",
    configName: "f7p2automessag",
    title: "F7 Phase Messages",
    description: "Automatically sends a message when you enter F7 phases of your choice",
    subcategory: "Auto Messages"
})
.addSwitch({
    category: "Floor 7",
    configName: "f7p1automessage",
    title: "F7 P1",
    description: "Automatically sends a message when you enter F7P1",
    subcategory: "Auto Messages",
    shouldShow(config) {
        return config.f7p2automessag
    }
})
.addSwitch({
    category: "Floor 7",
    configName: "f7p2automessage",
    title: "F7 P2",
    description: "Automatically sends a message when you enter F7P2",
    subcategory: "Auto Messages",
    shouldShow(config) {
        return config.f7p2automessag
    }
})
.addSwitch({
    category: "Floor 7",
    configName: "f7p3automessage",
    title: "F7 P3",
    description: "Automatically sends a message when you enter F7P3",
    subcategory: "Auto Messages",
    shouldShow(config) {
        return config.f7p2automessag
    }
})
.addSwitch({
    category: "Floor 7",
    configName: "f7p4automessage",
    title: "F7 P4",
    description: "Automatically sends a message when you enter F7P4",
    subcategory: "Auto Messages",
    shouldShow(config) {
        return config.f7p2automessag
    }
})
.addTextInput({
    category: "Floor 7",
    configName: "f7p1custommessage",
    title: "F7P1 Message",
    description: "Message that is sent when you enter F7P1",
    subcategory: "Auto Messages",
    placeholder: "ill rc",
    shouldShow(config) {
        return config.f7p1automessage
    }
})
.addTextInput({
    category: "Floor 7",
    configName: "f7p2custommessage",
    title: "F7P2 Message",
    description: "Message that is sent when you enter F7P2",
    subcategory: "Auto Messages",
    placeholder: "ill yellow pad, someone take green",
    shouldShow(config) {
        return config.f7p2automessage
    }
})
.addTextInput({
    category: "Floor 7",
    configName: "f7p3custommessage",
    title: "F7P3 Message",
    description: "Message that is sent when you enter F7P3",
    subcategory: "Auto Messages",
    placeholder: "ill do devs",
    shouldShow(config) {
        return config.f7p3automessage
    }
})
.addTextInput({
    category: "Floor 7",
    configName: "f7p4custommessage",
    title: "F7P4 Message",
    description: "Message that is sent when you enter F7P4",
    subcategory: "Auto Messages",
    placeholder: "ill ice spray",
    shouldShow(config) {
        return config.f7p4automessage
    }
})
.addSwitch({
    category: "Floor 7",
    configName: "fuckDiorite",
    title: "Fuck Diorite",
    description: "Turns diorite into glass",
    subcategory: "Misc"
})
.addSwitch({
    category: "Floor 7",
    configName: "autoEdrag",
    title: "Auto EDrag",
    description: "Automatically equips your ender dragon pet in M7P5",
    subcategory: "M7"
})
.addSwitch({
    category: "Floor 7",
    configName: "relicAura",
    title: "Relic Aura",
    description: "Automatically picks up the relics when in range (many thanks to odtheking)",
    subcategory: "M7"
})
.addSwitch({
    category: "Floor 7",
    configName: "m7Spots",
    title: "M7 Spots",
    description: "Creates waypoints for where you need to go in M7.",
    subcategory: "M7"
})

// ---------------------------------------------------------------
// Kuudra

.addSwitch({
    category: "Kuudra",
    configName: "kuudraNotifier",
    title: "Kuudra Notifier",
    description: "Notifies you about chosen alerts during the kuudra boss.",
    subcategory: "Notifiers"
})
.addSwitch({
    category: "Kuudra",
    configName: "kuudraNoKeyNotifier",
    title: "No Key Notifier",
    description: "Notifies you when you do not have a key during kuudra.",
    subcategory: "Notifiers",
    shouldShow(config) {
        return config.kuudraNotifier
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "kuudraSupplyCratesNotifier",
    title: "Supply Crates Notifier",
    description: "Notifies you when supply crates have dropped.",
    subcategory: "Notifiers",
    shouldShow(config) {
        return config.kuudraNotifier
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "kuudraFuelCellsNotifier",
    title: "Fuel Cells Notifier",
    description: "Notifies you when fuel cells have dropped.",
    subcategory: "Notifiers",
    shouldShow(config) {
        return config.kuudraNotifier
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "kuudraStunnedNotifier",
    title: "Kuudra Stunned Notifier",
    description: "Notifies you when kuudra has been stunned.",
    category: "Kuudra",
    subcategory: "Notifiers",
    shouldShow(config) {
        return config.kuudraNotifier
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "vanqNotifier",
    title: "Vanquisher Notifier",
    description: "Notifies you when a vanquisher spawns.",
    subcategory: "Notifiers",
    shouldShow(config) {
        return config.kuudraNotifier
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "enableClassBuyer",
    title: "Class Buyer",
    description: "Automatically purchases your class when you first open shop.",
    subcategory: "Class"
})
.addMultiCheckbox({
    category: "Kuudra",
    configName: "enableClassBuyer",
    title: "Class",
    description: "Select class to purchase.",
    subcategory: "Class",
    shouldShow(config) {
        return config.enableClassBuyer
    },
    options: [
        {
            configName: "autoSpecialist",
            title: "Specialist",
            value: false
        },
        {
            configName: "autoSupport",
            title: "Support",
            value: false
        },
        {
            configName: "autoCrowdControl",
            title: "Crowd Control",
            value: false
        },
        {
            configName: "autoCannoneer",
            title: "Cannoneer",
            value: false
        }
    ]
})

// ---------------------------------------------------------------
// Mining

.addSwitch({
    category: "Mining",
    configName: "fiveTimesTitanium",
    title: "5x Titanium",
    description: "Notifies you when the 5x titanium event is active",
    subcategory: "Events"
})
.addSwitch({
    category: "Mining",
    configName: "miningSpeedBoost",
    title: "Mining Speed Boost",
    description: "Notifies you when your mining speed boost ability is ready",
    subcategory: "General"
})
.addSwitch({
    category: "Mining",
    configName: "miningSpeedBoostOver",
    title: "Mining Speed Boost Over",
    description: "Notifies you when your mining speed boost ability is over",
    subcategory: "General"
})
.addSwitch({
    category: "Mining",
    configName: "autoRenewPass",
    title: "Auto Renew Pass",
    description: "Automatically renews your crystal hollows pass when it is about to expire",
    subcategory: "Crystal Hollows"
})
.addSwitch({
    category: "Mining",
    configName: "powderDisplay",
    title: "Powder Display",
    description: "Shows how much powder you have of both gemstone and mithril",
    subcategory: "Crystal Hollows"
  })
.addButton({
    category: "Mining",
    configName: "powderGui",
    title: "Powder GUI",
    description: "Move the position of the powder info",
    subcategory: "Crystal Hollows",
    onClick() {
        myGui.open()
    },
    shouldShow(config) {
        return config.powderDisplay
    }
})

// ---------------------------------------------------------------
// Party Finder

.addSwitch({
    category: "Party Finder",
    configName: "enableBlacklist",
    title: "Enable Blacklist",
    description: "Kicks players who's names are added to the blacklist",
    subcategory: "Blacklist"
})
.addTextInput({
    category: "Party Finder",
    configName: "playerBlacklistNames",
    title: "Party Blacklist",
    description: "Auto kicks names that you choose, separated by spaces",
    category: "Party Finder",
    subcategory: "Blacklist",
    placeholder: "x45k",
    shouldShow(config) {
        return config.enableBlacklist
    }
})
.addSwitch({
    category: "Party Finder",
    configName: "partyFullAlert",
    title: "Party Finder Full",
    description: "Notifies you when your party is full",
    subcategory: "General"
})

// ---------------------------------------------------------------
// Testing

.addMultiCheckbox({
    category: "Kuudra",
    configName: "testingForKuudraMultiBox",
    title: "Class v2",
    description: "Select class to purchase.",
    subcategory: "Class",
    shouldShow(config) {
        return config.enableClassBuyer
    },
    options: [
        {
            configName: "autoSpecialistv2",
            title: "Specialist",
            value: false,
            registerListener() {
                ChatLib.chat('multibox is fucking working bitch')
            }
        },
        {
            configName: "autoSupportv2",
            title: "Support",
            value: false
        },
        {
            configName: "autoCrowdControlv2",
            title: "Crowd Control",
            value: false
        },
        {
            configName: "autoCannoneerv2",
            title: "Cannoneer",
            value: false
        }
    ]
})

const setting = new Settings("Weed Client", config, schemePath)
    .setCommand("weed", ["weedclient"])

    .addMarkdown("Changelog", CHANGELOG)

// export
export default () => setting.settings