import Character from "../Character.ts";
import Fight from "../Fight.ts"
import FightRoom from "./FightRoom.ts"
import Item from "../Item.ts";



export default class BossRoom extends FightRoom {
    
    bossFight(Boss:Character[],alliesFigthers:Character[] ,itemsInInventory: Item[]){
        let enemiesTeam: Character[] = []
        let alliesFigthersAlive:Character[] = []
        console.log(`You have enter in the Boss Room !`);

        const battlefighter = alliesFigthers.concat(Boss) // enemies and allies in the same array
        const final = new Fight(battlefighter);
        let roundCount = 1;
        console.log(`Your on the ${roundCount} round !`);
        [alliesFigthersAlive, enemiesTeam, itemsInInventory] = final.teamFight(itemsInInventory);
        while(!(alliesFigthersAlive.length ==0 ||enemiesTeam.length ==0)){
            roundCount++;
            console.log(`Your on the ${roundCount} round !`);
            [alliesFigthersAlive, enemiesTeam, itemsInInventory] = final.teamFight(itemsInInventory);
        }
        if(alliesFigthersAlive.length ==0){
            console.log('Your team has been decimated. Game Over !');
        }else if(enemiesTeam.length ==0){
            console.log('You killed the Boss !');
            console.log("You have Won !!!");
        }
    }
}