import Character from "./Character.ts";

export default class Item {
    name: string;
    capacity: string;
    ressusciteHealth: number;
    healthRestitution: number;
    manaRestitution: number;

    constructor(name: string, capacity: string, ressusciteHealth: number, healthRestitution: number, manaRestitution: number){
        this.name = name;
        this.capacity = capacity;
        this.ressusciteHealth = ressusciteHealth;
        this.healthRestitution = healthRestitution;
        this.manaRestitution = manaRestitution;
    }
    usingItem(target:Character){
        if(this.name ==='Ether'){
            this.ether(target);
        }else if(this.name ==='HalfStar'){
            this.halfstar(target);
        }else if(this.name ==='Potion'){
            this.potion(target);
        }else if(this.name ==='Star'){
            this.star(target);
    }

    }
    ether(target:Character){
        target.mana *= 1.3;
        return console.log(`The ${this.name} has restore 30% Mana to ${target.name}.Is Mana is now ${target.mana}`);
    }
    halfstar(target:Character){
        if(target.res === true){
            Math.ceil(target.currentHp = target.currentHp*1.5);
            return console.log(`The ${this.name} has restore 50% Hp to ${target.name}. Is Hp is now ${target.currentHp}`);
        } else if(target.res === false){
           target.res = true, Math.ceil(target.currentHp = target.maxHp*0.2);
            return console.log(`The ${this.name} has revive ${target.name} and restore is 20% Hp. Is Hp is now ${target.currentHp}`);
        }
    }
    potion(target:Character){
        Math.ceil(target.currentHp *= 1.5);
        return  console.log(`The ${this.name} has restore 50% hp to ${target.name}. Is Hp is now ${target.currentHp}`);
    }
    star(target:Character){
        if(target.res === true){
            target.currentHp = target.maxHp;
            return console.log(`The ${this.name} has restore 100% Hp to ${target.name}. Is Hp is now ${target.currentHp}`)
        } else if(target.res === false){
            target.res = true, Math.ceil(target.currentHp = target.maxHp);
            return console.log(`The ${this.name} has revive ${target.name} whit all of this Hp. Is Hp is now ${target.currentHp}`)
        }
    }
}