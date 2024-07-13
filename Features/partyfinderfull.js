import Config from "../unusedconfig"

if (Config.partyFullAlert) {
    register("chat", () => {
        setTitle(`GO IN!!! YOUR PARTY IS FULL!!!`, "", 10, 100, 10, 63);
    }).setCriteria("&dParty Finder &f> &r&r&eYour dungeon group is full!&r&6 Click here to warp to the dungeon!&r");
}