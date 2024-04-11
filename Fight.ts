import Character from "./Character.ts";
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

import Item from "./Item.ts";
import Ether from './Items/Ether.ts';
import Halfstar from './Items/Halfstar.ts';
import Potion from "./Items/Potion.ts";
import Star from "./Items/Star.ts";

import clear from "console-clear"

export default class Fight {
    fighters : Character[];

    constructor(fighters : Character[]) {
        this.fighters = fighters;
    }
teamFight() {
        const playerTurn = this.orderFight();
        const alliesFigthers = [];
        let alliesFigthersAlive = []
        let enemiesFigthers = [];
        const itemsInInventory:Item[] = [halfstar,potion,potion,ether];

        
         for(let b=0;b<playerTurn.length;b++){
            if(playerTurn[b].team===true ){
                alliesFigthers.push(playerTurn[b])
                if(playerTurn[b].res === true){
                    alliesFigthersAlive.push(playerTurn[b])
                }
            } else if(playerTurn[b].team===false && playerTurn[b].res === true){
                enemiesFigthers.push(playerTurn[b])
            }
         }

         for(let i=0; i < playerTurn.length; i++){
            if(playerTurn[i].team === false){
                alliesFigthersAlive=playerTurn[i].monsterTurn(alliesFigthersAlive)
            }else{
                if(enemiesFigthers.length ==0){
                    return [alliesFigthersAlive, enemiesFigthers];
                }
                if(!alliesFigthersAlive.includes(playerTurn[i])){
                    console.log('\x1b[32m'+playerTurn[i].name+'\x1b[0m' +' is dead, he cannot do anything !');
                }else{
            console.log(`\nThis is your turn \x1b[32m${playerTurn[i].name}\x1b[0m`);
            console.log('What do you want to do ?');
            console.log(' 1- Attack \n 2- Special Attack \n 3- Use Item');
            const response = prompt('Choose a number:')
            switch(response){
                case "1":{
                    enemiesFigthers =playerTurn[i].alliesAttack(enemiesFigthers)
                    break;
                }
                    case "2":
                        clear(true)
                        console.log(`The \x1b[32m${playerTurn[i].name}\x1b[0m use is Special attack \x1b[35m${playerTurn[i].special_Capacity}\x1b[0m !\n`)
                        playerTurn[i].specialAttack(enemiesFigthers, alliesFigthersAlive, itemsInInventory);
                    break;
                    case "3":
                        clear(true)
                        playerTurn[i].useItem(itemsInInventory,alliesFigthers);
                    break;
                }
            }
    }
}
    return[alliesFigthersAlive, enemiesFigthers]
}

    orderFight(): Character[] {
        const arr : Character[] = []
        const sortedFighters = this.fighters.slice().sort((a, b) => b.attack_speed - a.attack_speed);
        sortedFighters.forEach(fighter => {
            arr.push(fighter);
        });
        return arr
    }

    enemieTeam(): Character[] {
        const arr : Character[] = [];
        const enemies = this.fighters.filter(fighter => !fighter.team);
        enemies.forEach(enemy => {
            arr.push(enemy);
        });
        const newTeam: Character[] = [];
        while(newTeam.length < 3 && arr.length > 0) {
        const random = Math.floor(Math.random() * arr.length);
        const randomEnemy = arr.splice(random, 1)[0];
        newTeam.push(randomEnemy);
        }
        return newTeam;
    }
}

// const warrior = new Warrior();
// const mage = new Mage();
// const paladin = new Paladin();

// const snake = new Snake();
// const goblin = new Goblin();
// const spider = new Spider();
// const orque = new Orque();
// const ogre = new Ogre();

const ether = new Ether();
const halfstar = new Halfstar();
const potion = new Potion();
const star = new Star();



// const test = new Fight([warrior,mage,paladin,snake,goblin,spider]);
// test.teamFight();