import Character from "./Character.ts";
import Item from "./Item.ts";
import clear from "console-clear"

export default class Fight {
    fighters : Character[];

    constructor(fighters : Character[]) {
        this.fighters = fighters;
    }
teamFight(itemsInInventory:Item[]):[Character[],Character[],Item[]] {
        const playerTurn = this.orderFight();
        const alliesFigthers = [];
        let alliesFigthersAlive = []
        let enemiesFigthers = [];

        
         for(let b=0;b<playerTurn.length;b++){
            if(playerTurn[b].team===true ){
                alliesFigthers.push(playerTurn[b])
                if(playerTurn[b].res === true){
                    alliesFigthersAlive.push(playerTurn[b])
                }
            } else if(playerTurn[b].team===false && playerTurn[b].res === true){
                enemiesFigthers.push(playerTurn[b])
            }
         }

         for(let i=0; i < playerTurn.length; i++){
            if(playerTurn[i].team === false){
                alliesFigthersAlive=playerTurn[i].monsterTurn(alliesFigthersAlive)
            }else{
                if(enemiesFigthers.length ==0){
                    return [alliesFigthersAlive, enemiesFigthers,itemsInInventory];
                }
                if(!alliesFigthersAlive.includes(playerTurn[i])){
                    console.log('\x1b[32m'+playerTurn[i].name+'\x1b[0m' +' is dead, he cannot do anything !');
                }else{
            console.log(`\nThis is your turn \x1b[32m${playerTurn[i].name}\x1b[0m`);
            console.log('What do you want to do ?');
            console.log(' 1- Attack \n 2- Special Attack \n 3- Use Item');
            const response = prompt('Choose a number:')
            switch(response){
                case "1":{
                    enemiesFigthers =playerTurn[i].alliesAttack(enemiesFigthers)
                    break;
                }
                    case "2":
                        clear(true)
                        console.log(`The \x1b[32m${playerTurn[i].name}\x1b[0m use is Special attack \x1b[35m${playerTurn[i].special_Capacity}\x1b[0m !\n`)
                        playerTurn[i].specialAttack(enemiesFigthers, alliesFigthersAlive, itemsInInventory);
                    break;
                    case "3":
                        clear(true)
                        playerTurn[i].useItem(itemsInInventory,alliesFigthers);
                    break;
                }
            }
    }
}
    return[alliesFigthersAlive, enemiesFigthers, itemsInInventory]
}

    public orderFight(): Character[] {
        const arr : Character[] = []
        const sortedFighters = this.fighters.slice().sort((a, b) => b.attack_speed - a.attack_speed);
        sortedFighters.forEach(fighter => {
            arr.push(fighter);
        });
        return arr
    }

    public enemieTeam(): Character[] {
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