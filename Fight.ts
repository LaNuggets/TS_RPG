import Character from "./Characters.ts";

export default class Fight {
    fighters : Character[];

    constructor(fighters : Character[]) {
        this.fighters = fighters
    }

    teamFight() {
        const fighters = Character.name
        console.log(`The two team to figths are ${fighters}`)   
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
