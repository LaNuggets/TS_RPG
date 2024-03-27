import Character from "./characters.ts";

export default class Fight {
    team: string;
    turnOrder: string;
    whosTurn: string;
    isAlive: boolean;
    winOrLose: boolean;

    constructor(team: string, turnOrder: string, whosTurn: string, isAlive: boolean, winOrLose: boolean){
        this.team = team
        this.turnOrder = turnOrder
        this.whosTurn = whosTurn
        this.isAlive = isAlive
        this.winOrLose = winOrLose
    }

    teamFight() {
        const fighters = Character.name
        console.log(`The two team to figths are ${fighters}`)   
    }

    orderFight(fighters: Character[]) {
        const speed_attack = []
        for(let i = 0; i < fighters.length; i++) {
        speed_attack.push(fighters[i].attack_speed);
        }
        let before = speed_attack[0]
        let indexFinder = 0
        for(let i = 0; i < speed_attack.length; i++) {
            if(before <= speed_attack[i]) {
                before = speed_attack[i]
                indexFinder = i
            }
        }
        console.log(fighters[indexFinder].name)
    }
}



const participants = new Fight('The 2 team fighting are :', '', '', true, true )

const warrior = new Character(true, 'Warrior', 100, 100, 20, 10, 7, 1, 1, 5, 'wrath_Of_God', true, );
const mage = new Character(true ,'Mage', 70, 70, 100, 1, 1, 10, 7, 5, 'firebolt', true);
const paladin = new Character(true, 'Paladin', 110, 110, 50, 5, 7, 5, 7, 3, 'protection', true);
const barbar = new Character(true, 'Barbar', 100, 100, 10, 10, 5, 1, 1, 8, 'destruction', true);
const priest = new Character(true, 'Priest', 60, 60, 100, 4, 6, 5, 6, 1, 'healing', true);
const thief = new Character(true, 'Thief', 80, 80, 70, 7, 4, 7, 4, 10, 'theft', true);


const snake = new Character(false, 'Snake', 100, 100, 7, 7, 3, 3, 5, 9, 'fatal_bazooka', true);
const ogre = new Character(false, 'Ogre', 100, 7, 7, 3, 3, 5, 1, 2, 'shreked', true);
const goblin = new Character(false, 'Goblin', 100, 7, 7, 3, 3, 5, 0, 7, 'hihihiha', true);
const orque = new Character(false, 'Orque', 100, 7, 7, 3, 3, 5, 3, 7, 'orquidocki', true);
const spider = new Character(false, 'Spider', 100, 7, 7, 3, 3, 5, 1, 6, 'spiderman', true);

const arr = [warrior, priest, paladin, snake, ogre, goblin]
participants.orderFight(arr)