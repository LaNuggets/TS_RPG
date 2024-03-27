import Character from "./Characters.ts";

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
}
