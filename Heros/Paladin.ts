import Character from '../Character.ts'
export default class Paladin extends Character{
    constructor(){
            super(true,'Paladin', 110,110,50,5,7,5,7,3,'holySmash',true)
    }
    // holySmash(enemiesFigthers: Character[]){
    //     for(let i=0;i<enemiesFigthers.length;i++){
    //         (this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4;
    //         return console.log(`The ${this.name} has damage ${enemiesFigthers[i].name}, ${enemiesFigthers[i].name} has take ${(this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4}\n`)
    //     }
    // }
}