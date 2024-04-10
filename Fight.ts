import Character from "./Character.ts";

export default class Fight {
    fighters : Character[];

    constructor(fighters : Character[]) {
        this.fighters = fighters
    }

    teamFight() {
     
    }

    orderFight(): Character[] {
        const arr : Character[] = []
        const sortedFighters = this.fighters.slice().sort((a, b) => b.attack_speed - a.attack_speed);
        sortedFighters.forEach(fighter => {
            arr.push(fighter);
            
        });
        return arr
    }

    enemieTeam(): Character[] {
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

console.log('\x1b[38;5;50m%s\x1b[0m' , 'salut')