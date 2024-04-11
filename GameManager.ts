import Menu from "./Menu.ts";
import FightRoom from "./Rooms/FightRoom.ts"
import Fight from "./Fight.ts"
import Character from "./Character.ts";

import clear from "console-clear"

import Warrior from './Heros/Warrior.ts';
import Mage from './Heros/Mage.ts';
import Paladin from './Heros/Paladin.ts';
import Priest from './Heros/Priest.ts';
import Thief from './Heros/Thief.ts';
import Barbar from './Heros/Barbar.ts';

import Ogre from './Enemies/Ogre.ts';
import Goblin from './Enemies/Goblin.ts';
import Orque from './Enemies/Orque.ts';
import Snake from './Enemies/Snake.ts';
import Spider from './Enemies/Spider.ts';

class GameManager {
    play(){
        const menu = new Menu();
        const [adversaire, enemiesTeam] =menu.generateEnemies();
        const alliesFigthers = menu.display(); // The start of the Game + Team choice
        adversaire.fight(enemiesTeam, alliesFigthers);// Room number + enemies meet
    }
}

const game = new GameManager();
game.play();