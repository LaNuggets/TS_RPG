import Room from "../Room.ts";
import Character from "../Character.ts";
import Item from "../Item.ts";
import Ether from "../Items/Ether.ts";
import Halfstar from "../Items/Halfstar.ts";
import Potion from "../Items/Potion.ts";
import Star from "../Items/Star.ts";
import Warrior from "../Heros/Warrior.ts"


class ChestRoom extends Room {
    treasures: Item[];

    constructor(description: string, treasures: Item[]) {
        super(description, "treasure", false);
        this.treasures = treasures;
    }

    openChest(character: Character) {
        const isTrapped = Math.random() < 0.3;
        const itemsInInventory: Item[] = [];
        console.log("You enter in a room");
        
        if (isTrapped) {
            console.log("The chest is trapped");
            const trapDamage = Math.floor(Math.random() * 20) + 10;
            character.loseHp(trapDamage);
            console.log(`${character.name} takes ${trapDamage} damage from the trap.`);
        } else {
            console.log("You open the chest and found an item!");
            const numItemsToFind = Math.floor(Math.random() * 4) + 1;
            console.log(`You found ${this.treasures[numItemsToFind - 1].name}!`);
            this.treasures[numItemsToFind - 1].addItem(itemsInInventory);
        }
    }
}

// Création des objets Item
const ether = new Ether();
const halfstar = new Halfstar();
const potion = new Potion();
const star = new Star();

// Création du personnage et de la salle de coffre
const warrior = new Warrior();
const treasures = [ether, halfstar, potion, star];
const chestroom = new ChestRoom("You are in the Chest Room", treasures);

// Utilisation de la méthode openChest
chestroom.openChest(warrior);
