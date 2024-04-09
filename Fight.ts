import Character from "./Character.ts";
import Warrior from './Heros/Warrior.ts'
import Mage from './Heros/Mage.ts'
import Paladin from './Heros/Paladin.ts'
import Priest from './Heros/Priest.ts'
import Thief from './Heros/Thief.ts'
import Barbar from './Heros/Barbar.ts'
import Ogre from './Enemies/Ogre.ts'
import Goblin from './Enemies/Goblin.ts'
import Orque from './Enemies/Orque.ts'
import Snake from './Enemies/Snake.ts'
import Spider from './Enemies/Spider.ts'

import clear from "console-clear"

export default class Fight {
    fighters : Character[];

    constructor(fighters : Character[]) {
        this.fighters = fighters;
    }
    teamFight() {
        const playerTurn = this.orderFight();
        let resp : string | null = null;
        const alliesFigthers = [];
        const enemiesFigthers = [];
         for(let b=0;b<playerTurn.length;b++){
            if(playerTurn[b].team===true){
                alliesFigthers.push(playerTurn[b])
            } else if(playerTurn[b].team===false){
                enemiesFigthers.push(playerTurn[b])
            }
         }
         for(let i=0; i < playerTurn.length; i++){
            if(playerTurn[i].team === false){
                playerTurn[i].monsterTurn(alliesFigthers)
            }else{
            console.log(`This is your turn \x1b[32m${playerTurn[i].name}\x1b[0m`);
            console.log('What do you want to do ?');
            console.log(' 1- Attack \n 2- Special Attack \n 3- Use Item');
            const response = prompt('Choose a number:')
            switch(response){
                case "1":{
                    clear(true)
                    console.log(`You are the \x1b[32m${playerTurn[i].name}\x1b[0m`)
                    for(let j=0; j <enemiesFigthers.length; j++){
                        console.log(j+1+`- ${enemiesFigthers[j].name}`);
                    }
                    while(!(resp == '1' || resp == '2' || resp == '3')){
                        resp = prompt('Choose your target number !');
                        if(!(resp == '1' || resp == '2' || resp == '3')){
                            resp = prompt('Choose a correct number !');
                        } 
                    }
                    console.log(playerTurn[parseInt(resp)-1].loseHp(playerTurn[i].physical_Attack - playerTurn[parseInt(resp)-1].physical_Defense))
                    console.log( playerTurn[parseInt(resp)-1].name)
                    resp = null
                    break;
                }
                    case "2":
                        console.log(`Your special attack is \x1b[31m${playerTurn[i].special_Capacity}\x1b[0m`)

                    break;
                    case "3":

                    break;
            }
         }
        }
    }

    orderFight(): Character[] {
        const arr : Character[] = []
        const sortedFighters = this.fighters.slice().sort((a, b) => b.attack_speed - a.attack_speed);
        sortedFighters.forEach(fighter => {
            arr.push(fighter);
        });
        return arr
    }
}

const warrior = new Warrior()
const mage = new Mage()
const paladin = new Paladin()
const snake = new Snake()
const goblin = new Goblin()
const spider = new Spider()

const test = new Fight([warrior,mage,paladin,snake,goblin,spider])
test.teamFight();