import Fight from './Fight.ts'

export default class Character {
    name : string;
    maxHp : number;
    currentHp : number;
    mana : number;
    physical_Attack : number;
    physical_Defense : number;
    magical_Attack : number;
    magical_Defense : number;
    attack_speed : number;
    special_Capacity : string;
    res : boolean;

    constructor(name: string, maxHp: number,currentHp : number, mana: number, physical_Attack: number, 
        physical_Defense: number, magical_Attack:number, magical_Defense:number, attack_speed: number, special_Capacity:string,
         res : boolean) {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
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