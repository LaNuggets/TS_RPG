import Ether from "../Items/Ether.ts";
import Halfstar from "../Items/Halfstar.ts"
import Potion from "../Items/Potion.ts"
import Star from "../Items/Star.ts"
import Character from "../Character.ts";
import Item from "../Item.ts";
import Room from "../Room.ts"

export default class ChestRoom extends Room{
    constructor(description: string, type: string, isVisited: boolean) {
    super(description, type, isVisited);
    }
    
    openChest(character: Character, itemsInInventory: Item[]):Item[] {
            const ether = new Ether();
            const halfstar = new Halfstar();
            const potion = new Potion();
            const star = new Star();
            const isTrapped = Math.random() < 0.3;
        console.log("You enter in a Chest Room !")
        if (isTrapped) {
            console.log("The chest is trapped !");

            const trapDamage = Math.floor(Math.random() * 20) + 10;
            character.loseHp(trapDamage);
            console.log(`${character.name} takes ${trapDamage} damages points of the chest.`);
        } else {
            console.log("You open the chest and found an item!");
            const foundItem = [ether, halfstar, potion, star];
            const numItemsToFind = Math.floor(Math.random() * 4) + 1;
            console.log(`You found ${foundItem[numItemsToFind-1].name}!`);
            foundItem[numItemsToFind-1].addItem(itemsInInventory);
            }
            return itemsInInventory;
        }   
}
