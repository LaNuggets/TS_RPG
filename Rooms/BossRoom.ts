import Room from "../Room.ts";
import Character from "../Character.ts";
import Boss from "../Enemies/Boss.ts";
import Fight from "../Fight.ts";

class BossRoom extends Room {
    private fight: Fight;

    constructor(description: string, playerCharacters: Character[], boss: Character) {
        super(description, "boss", false);
        this.fight = new Fight([...playerCharacters, boss]);
    }

    startBossFight() {
        console.log("Welcome to the boss room!");
        console.log("Prepare for the final battle!");

        this.fight.teamFight(); // Démarrez le combat avec les personnages du joueur et le boss

        console.log("Congratulations! You defeated the boss!");
        console.log("You have won the game!");
    }
}

export default BossRoom;
