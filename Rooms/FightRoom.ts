import Fight from "../Fight.ts"
import Character from "../Character.ts";
import Item from "../Item.ts";


export default class FightRoom extends Fight  {
    
    fight(enemiesFigthers:Character[], alliesFigthers:Character[] ,itemsInInventory: Item[]):[Character[], Item[]]{
        let enemiesTeam: Character[] = []
        let alliesFigthersAlive:Character[] = []
        console.log(`You have enter in a monster Room !`);
        console.log(`You came face to face against`);
        for(let i=0;i<enemiesFigthers.length;i++){
            console.log(`- \x1b[31m${enemiesFigthers[i].name}\x1b[0m`)
        }
        const battlefighter = alliesFigthers.concat(enemiesFigthers) // enemies and allies in the same array
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
            console.log('You killed all the enemie team, congratulation !');
            console.log("Let's go in the next Room !");
            return [alliesFigthersAlive, itemsInInventory];
        }
    }

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
