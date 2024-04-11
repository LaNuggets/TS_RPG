import Room from "../Room.ts";
import Character from "../Character.ts";
import Goblin from "../Enemies/Goblin.ts";
import Ogre from "../Enemies/Ogre.ts";
import Orque from "../Enemies/Orque.ts";
import Snake from "../Enemies/Snake.ts";
import Spider from "../Enemies/Spider.ts";
import Fight from "../Fight.ts";

class FightRoom extends Room {
    private fight: Fight;

    constructor(description: string, fighters: Character[], enemies: Character[]) {
        super(description, "fight", false);
        this.fight = new Fight([...fighters, ...enemies]);
    }

    startCombat() {
        console.log("Welcome to the fight room!");
        console.log("Get ready for battle!");

        this.fight.teamFight(); // Démarrez le combat avec les combattants et les ennemis

        console.log("The battle has ended. Great Job!");
    }
}

export default FightRoom;
