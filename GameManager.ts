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
        const snake = new Snake();
        const goblin = new Goblin();
        const spider = new Spider();
        const orque = new Orque();
        const ogre = new Ogre();
        const enemiesFigthers:Character[]=[snake,goblin,spider,orque,ogre];

        const enemy = new Fight(enemiesFigthers);
        const menu = new Menu();
        const enemiesTeam = enemy.enemieTeam();
        const adversaire = new FightRoom(enemiesTeam);

        const alliesFigthers = menu.display();
        adversaire.fight(enemiesTeam);
        const battlefighter = alliesFigthers.concat(enemiesTeam)
        const final = new Fight(battlefighter);
        final.teamFight();
        const aliveallies = battlefighter.filter((fighter)=> fighter.team)
        aliveallies.forEach(allies => {
            if(allies.res){
                clear(true);
                final.teamFight();
            }else{
                console.log('combat fini')
            }
        });
    }
}

const game = new GameManager();
game.play();