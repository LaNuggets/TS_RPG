import Fight from "../Fight.ts"
import Room from "../Room.ts"
import Character from "../Character.ts";


export default class FightRoom extends Fight  {
    
    fight(enemiesFigthers:Character[]){
        console.log(`You have enter in the First Room !`);
        console.log(`You came face to face against`);
        for(let i=0;i<enemiesFigthers.length;i++){
            console.log(`- \x1b[31m${enemiesFigthers[i].name}\x1b[0m`)
        }
    }
}
