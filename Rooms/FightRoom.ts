import Fight from "../Fight.ts"
import Room from "../Room.ts"
import Character from "../Character.ts";


export default class FightRoom extends Fight  {
    
    fight(enemiesFigthers:Character[], alliesFigthers:Character[]){
        console.log(`You have enter in the First Room !`);
        console.log(`You came face to face against`);
        for(let i=0;i<enemiesFigthers.length;i++){
            console.log(`- \x1b[31m${enemiesFigthers[i].name}\x1b[0m`)
        }
        const battlefighter = alliesFigthers.concat(enemiesFigthers) // enemies and allies in the same array
        const final = new Fight(battlefighter);
        let roundCount = 1;
        console.log(`your on the ${roundCount} round !`);
        let [alliesFigthersAlive, enemiesTeam] = final.teamFight();
        while(!(alliesFigthersAlive.length ==0 ||enemiesTeam.length ==0)){
            roundCount++;
            console.log(`your on the ${roundCount} round !`);
            [alliesFigthersAlive, enemiesTeam] = final.teamFight();
        }
        if(alliesFigthersAlive.length ==0){
            console.log('Your team has been decimated. Game Over !');
        }else if(enemiesTeam.length ==0){
            console.log('You killed all the enemie team, congratulation !');
            console.log("Let's go in the next Room !");
        }
    }
}
