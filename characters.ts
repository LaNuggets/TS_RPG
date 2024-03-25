export default class Characters {
    race : boolean;
    name : string;
    pvMax : number;
    pvCurrent : number;
    mana : number;
    physical_Attack : number;
    physical_Defense : number;
    magical_Attack : number;
    magical_Defense : number;
    attack_speed : number;
    special_Capacity : string;
    res : boolean;

    constructor(race : boolean,name: string, pvMax: number,pvCurrent : number, mana: number, 
    physical_Attack: number,physical_Defense: number, magical_Attack:number, magical_Defense:number, 
    attack_speed: number, special_Capacity:string, res : boolean) 
    {

        this.race = race;
        this.name = name;
        this.pvMax = pvMax;
        this.pvCurrent = pvCurrent;
        this.mana = mana;
        this.physical_Attack = physical_Attack;
        this.physical_Defense = physical_Defense;
        this.magical_Attack = magical_Attack;
        this.magical_Defense = magical_Defense;
        this.attack_speed = attack_speed;
        this.special_Capacity = special_Capacity;
        this.res = res;
    }



}

const warrior = new Characters(true,'Warrior', 100,100,20,10,7,1,1,5,'wrath_Of_God',true
);
const mage = new Characters(true,'Mage', 70,70,100,1,1,10,7,5,'firebolt', true);
const paladin = new Characters(true,'Paladin', 110,110,50,5,7,5,7,3,'protection',true);
const barbar = new Characters(true,'Barbar', 100,100,10,10,5,1,1,8,'destruction',true);
const priest = new Characters(true,'Priest',60,60,100,4,6,5,6,1,'healing',true);
const thief = new Characters(true,'Thief', 80,80,70,7,4,7,4,10,'theft',true);


const snake = new Characters(false,'Snake', 100,100,7,7,3,3,5,8,'',true);
const ogre = new Characters(false,'Ogre', 100,100,7,7,3,3,5,7,'',true);
const goblin = new Characters(false,'Goblin', 100,100,7,7,3,3,5,5,'',true);
const orque = new Characters(false,'Orque', 100,100,7,7,3,3,5,5,'',true);
const spider = new Characters(false,'Spider', 100,100,7,7,3,3,5,8,'',true);
const arabe = new Characters(false,"Merhmoud",1000,1000,250,10,10,10,10,10,'allah uakbar',true)

//todo
// characterChoice(){
//     console.log("welcome to the this TypeScript RPG !");
//     console.log("Rules...");
//     console.log("First thing first build your team by choosing 3 characters !");
//     let count= 0;
//     for(const char of characters) {
//         count++;
//         console.log(count, '->',char.name);
//     }
//     while (chosenCharacter.length !== 3) {
//         const playerResponse = parseInt(prompt('Type the number of character you want ->'))
//         console.log(`you chose the ${characters[playerResponse-1].name}`)
//         chosenCharacter.push(characters[playerResponse-1].name)  
//     }
//     console.log(`This is your team :\n -${chosenCharacter.join('\n -')}`)
// }