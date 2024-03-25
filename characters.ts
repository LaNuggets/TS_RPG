export default class Character {
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

    constructor(race : boolean,name: string, pvMax: number,pvCurrent : number, mana: number, physical_Attack: number, physical_Defense: number, magical_Attack:number, magical_Defense:number, attack_speed: number, special_Capacity:string, res : boolean) {
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

//todo ally
// const warrior = new Character('Warrior', 100,20,10,7,1,1,5,'wrath_Of_God');
// const mage = new Character('Mage', 70,100,1,1,10,7,5,'firebolt');
// const paladin = new Character('Paladin', 110,50,5,7,5,7,3,'protection');
// const barbar = new Character('Barbar', 100,10,10,5,1,1,8,'destruction');
// const priest = new Character('Priest', 60,100,4,6,5,6,1,'healing');
// const thief = new Character('Thief', 80,70,7,4,7,4,10,'theft');
//! ennemy
// const snake = new Character('Snake', 100,7,7,3,3,5);
// const ogre = new Character('Ogre', 100,7,7,3,3,5);
// const goblin = new Character('Goblin', 100,7,7,3,3,5);
// const orque = new Character('Orque', 100,7,7,3,3,5);
// const spider = new Character('Spider', 100,7,7,3,3,5);


//todo
// characterChoice(){
//     console.log("welcome to the this TypeScript RPG !");
//     console.log("Rules...");
//     console.log("Firsting first build your team by choosing 3 characters !");
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