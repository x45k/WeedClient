import config from "../Config";

if (config().kuudraNoKeyNotifier) {
    register("chat", () => {
        Client.showTitle(`YOU DO NOT HAVE A KUUDRA KEY!`, "", 10, 50, 10);
    }).setCriteria("WARNING: You do not have a key for this tier in your inventory, you will not be able to claim rewards.");
}

if (config().kuudraSupplyCratesNotifier) {
    register("chat", () => {
        setTitle(`SUPPLY CRATES DROPPED!`, "", 10, 100, 10, 63);
    }).setCriteria("[NPC] Elle: Not again!");
}

register("chat", (player, percentage) => {
    if (config().kuudraFuelCellsNotifier) {
        switch (percentage) {
            case "100":
                setTitle('100% [IIII]', "", 10, 100, 10, 66);
                break;
            case "75":
                setTitle('75% [III]', "", 10, 50, 10, 66);
                break;
            case "50":
                setTitle('50% [II]', "", 10, 50, 10, 66);
                break;
            case "25":
                setTitle('25% [I]', "", 10, 50, 10, 66);
                break;
        }
    }
}).setCriteria("${player} recovered a Fuel Cell and charged the Ballista! (${percentage}%)");

if (config().kuudraStunnedNotifier) {
    register("chat", () => {
        setTitle(`KUUDRA HAS BEEN STUNNED!`, "", 10, 100, 10, 69);
    }).setCriteria("{player} destroyed one of Kuudra's pods!");
}
