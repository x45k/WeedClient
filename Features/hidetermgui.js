import Config from "../Config";

let inv = Player.getContainer();
let n = inv.getName();

register(net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent.Pre, (event) => {
    if (n == 'Click the button on time!' || 
        n == 'Click in order!' || 
        n == 'Select all the ' || 
        n == 'What starts with: ' || 
        n == 'Navigate the maze!' || 
        n == 'Change all to same color!' || 
        n == 'Correct all the panes!' && Config.termInvWalk) {
        cancel(event);
    }
});