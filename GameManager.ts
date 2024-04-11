import Menu from "./Menu.ts";
import FightRoom from "./Rooms/FightRoom.ts"
import Fight from "./Fight.ts"
import Character from "./Character.ts";
import ChestRoom from './Rooms/ChestRoom.ts'

import Item from "./Item.ts";
import Ether from './Items/Ether.ts';
import Halfstar from './Items/Halfstar.ts';
import Potion from "./Items/Potion.ts";

class GameManager {
    play(){
        const ether = new Ether();
        const halfstar = new Halfstar();
        const potion = new Potion();
        let itemsInInventory:Item[] = [halfstar,potion,potion,ether];
        let alliesFigthersAlive:Character []=[]

        const menu = new Menu();
        let [adversaire, enemiesTeam] =menu.generateEnemies();
        const alliesFigthers = menu.display(); // The start of the Game + Team choice
        [alliesFigthersAlive, itemsInInventory]=adversaire.fight(enemiesTeam, alliesFigthers,itemsInInventory);// Room number + enemies meet
        const chestroom = new ChestRoom("You are in the Chest Room","Chest",false);
        itemsInInventory =chestroom.openChest(alliesFigthersAlive[0],itemsInInventory);
        [adversaire, enemiesTeam] =menu.generateEnemies();
        [alliesFigthersAlive, itemsInInventory]=adversaire.fight(enemiesTeam, alliesFigthers,itemsInInventory);// Room number + enemies meet
        itemsInInventory =chestroom.openChest(alliesFigthersAlive[0],itemsInInventory);
    }
}

const game = new GameManager();
game.play();