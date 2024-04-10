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
        playerTurn[3].res = false;
         for(let b=0;b<playerTurn.length;b++){
            if(playerTurn[b].team===true && playerTurn[b].res === true){
                alliesFigthers.push(playerTurn[b])
            } else if(playerTurn[b].team===false && playerTurn[b].res === true){
                enemiesFigthers.push(playerTurn[b])
            }
         }
         for(let i=0; i < playerTurn.length; i++){
            if(playerTurn[i].res === false){
                if(playerTurn[i].team=== true){
                console.log(`\x1b[32m${playerTurn[i].name}\x1b[0m is dead, he cannot do anything.`)
                }else if (playerTurn[i].team=== false){
                    console.log(`\x1b[31m${playerTurn[i].name}\x1b[0m is dead, he cannot do anything.`)
                }
            }else{
            if(playerTurn[i].team === false){
                playerTurn[i].monsterTurn(alliesFigthers)
            }else{
            console.log(`\nThis is your turn \x1b[32m${playerTurn[i].name}\x1b[0m`);
            console.log('What do you want to do ?');
            console.log(' 1- Attack \n 2- Special Attack \n 3- Use Item');
            const response = prompt('Choose a number:')
            switch(response){
                case "1":{
                    clear(true)
                    console.log(`You are the \x1b[32m${playerTurn[i].name}\x1b[0m`)
                    for(let j=0; j <enemiesFigthers.length; j++){
                        console.log(j+1+`- \x1b[31m${enemiesFigthers[j].name}\x1b[0m`);
                    }
                    while(!(resp == '1' || resp == '2' || resp == '3')){
                        resp = prompt('Choose your target number !');
                        if(!(resp == '1' || resp == '2' || resp == '3')){
                            resp = prompt('Choose a correct number !');
                        } 
                    }
                    clear(true);
                    playerTurn[parseInt(resp)-1].loseHp(playerTurn[i].physical_Attack)
                    console.log(`The \x1b[32m${playerTurn[i].name}\x1b[0m damage the \x1b[31m${playerTurn[parseInt(resp)-1].name}\x1b[0m, he lose \x1b[38;5;208m${playerTurn[i].physical_Attack}\x1b[0m Hp, he has \x1b[38;5;208m${playerTurn[parseInt(resp)-1].currentHp}\x1b[0m Hp left.\n`)
                    resp = null
                    break;
                }
                    case "2":
                        clear(true)
                        console.log(`The \x1b[32m${playerTurn[i].name}\x1b[0m use is Special attack \x1b[35m${playerTurn[i].special_Capacity}\x1b[0m !\n`)
                        playerTurn[i].specialAttack(enemiesFigthers, alliesFigthers);
                    break;
                    case "3":

                    break;
            }
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

const warrior = new Warrior()
const barbar = new Barbar()
const paladin = new Paladin()
const snake = new Snake()
const goblin = new Goblin()
const spider = new Spider()

const test = new Fight([warrior,barbar,paladin,snake,goblin,spider])
test.teamFight();