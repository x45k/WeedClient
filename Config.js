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

@Vigilant("WeedClient", "WeedClient", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "Solvers", "Terminals", "Gui", "Party Finder"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class Config {
    constructor() {
        this.initialize(this)

        const lines = [
            "",
            ""
        ]
        const maxLength = Math.max(...lines.map(a => Renderer.getStringWidth(a)))

        this.setCategoryDescription("General", 
            `
            &2&l&nWeed

            ${lines.map(a => a !== "" ? padText(a + "&0", ".", maxLength) : a).join("\n")}

            &2GreenV1 & x45k are very cool and cool
            `
        )

    }

    toggleSprintMove = new Gui()

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
        name: "Toggle Sprint",
        description: "Automatically Sprint",
        category: "General",
        subcategory: "Toggle Sprint"
    })
    toggleSprint = false;

    @SwitchProperty({
        name: "Toggle Sprint Overlay",
        description: "Renders text on your screen when toggle sprint is enabled.",
        category: "General",
        subcategory: "Toggle Sprint"
    })
    toggleSprintOverlay = false;

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
        description: "The text to be showed when toggle sprint is enabled",
        category: "General",
        subcategory: "Toggle Sprint",
        placeholder: "Sprinting Enabled"
    })
    toggleSprintText = "";

    @SwitchProperty({
        name: "Auto Harp",
        description: "Automatically completes harp. (Works well with living wifi)",
        category: "General",
        subcategory: "Auto Harp"
    })
    autoharp = false;


    // ---------------------------------------------------------------
    // Dungeons

    // ---------------------------------------------------------------
    // Solvers

    // ---------------------------------------------------------------
    // Terminals

    @SliderProperty({
        name: "Auto Term Delay",
        description: "Delay between auto terminal clicking",
        category: "Terminals",
        subcategory: "Auto Terms",
        min: 1,
        max: 500
    })
    autoTermDelay = 200;

    @SelectorProperty({
        name: 'Click Type',
        description: 'Which click type auto terminals utilise',
        category: 'Terminals',
        subcategory: 'Auto Terms',
        options: ['Left', 'Middle', 'Shift'],
    })
    autoClickType = 0;

    // TYPES OF TERMS
    @CheckboxProperty({
        name: 'Correct the Panes',
        description: 'Correct all the panes terminal',
        category: 'Terminals',
        subcategory: 'Auto Terms',
    })
    panes = true;

    @CheckboxProperty({
        name: 'Numbers',
        description: 'Click on order terminal',
        category: 'Terminals',
        subcategory: 'Auto Terms',
    })
    numbers = true;

    @CheckboxProperty({
        name: 'Same Color',
        description: 'Change all to same color terminal',
        category: 'Terminals',
        subcategory: 'Auto Terms',
    })
    rubix = true;

    @CheckboxProperty({
        name: 'Select of Same',
        description: 'Correct all the panes terminal',
        category: 'Terminals',
        subcategory: 'Auto Terms',
    })
    selectallthe = true;

    @CheckboxProperty({
        name: 'Starts With',
        description: 'Starts with Terminal',
        category: 'Terminals',
        subcategory: 'Auto Terms',
    })
    startswith = true;

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