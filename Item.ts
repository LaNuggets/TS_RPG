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
    public usingItem(target:Character){
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
    public ether(target:Character){
        target.mana *= 1.3;
        return console.log(`The \x1b[36m${this.name}\x1b[0m has restore \x1b[38;5;208m30%\x1b[0m Mana to \x1b[32m${target.name}\x1b[0m. Is Mana is now \x1b[38;5;208m${target.mana}\x1b[0m`);
    }
    public halfstar(target:Character){
        if(target.res === true){
            Math.ceil(target.currentHp = target.currentHp*1.5);
            if(target.currentHp>target.maxHp){
                target.currentHp = target.maxHp;
            }
            return console.log(`The \x1b[36m${this.name}\x1b[0m has restore \x1b[38;5;208m50%\x1b[0m Hp to \x1b[32m${target.name}\x1b[0m. Is Hp is now \x1b[38;5;208m${target.currentHp}\x1b[0m`);
        } else if(target.res === false){
           target.res = true, Math.ceil(target.currentHp = target.maxHp*0.2);
            return console.log(`The ${this.name} has revive \x1b[32m${target.name}\x1b[0m and restore is \x1b[38;5;208m20\x1b[0m% Hp. Is Hp is now \x1b[38;5;208m${target.currentHp}\x1b[0m`);
        }
    }
    public potion(target:Character){
        Math.ceil(target.currentHp *= 1.5);
        if(target.currentHp>target.maxHp){
            target.currentHp = target.maxHp;
        }
        return  console.log(`The \x1b[36m${this.name}\x1b[0m has restore \x1b[38;5;208m50%\x1b[0m hp to \x1b[32m${target.name}\x1b[0m. Is Hp is now \x1b[38;5;208m${target.currentHp}\x1b[0m`);
    }
    public star(target:Character){
        if(target.res === true){
            target.currentHp = target.maxHp;
            return console.log(`The \x1b[36m${this.name}\x1b[0m has restore \x1b[38;5;208m100%\x1b[0m Hp to \x1b[32m${target.name}\x1b[0m. Is Hp is now \x1b[38;5;208m${target.currentHp}\x1b[0m`)
        } else if(target.res === false){
            target.res = true, Math.ceil(target.currentHp = target.maxHp);
            return console.log(`The \x1b[36m${this.name}\x1b[0m has revive \x1b[32m${target.name}\x1b[0m whit all of this Hp. Is Hp is now \x1b[38;5;208m${target.currentHp}\x1b[0m`)
        }
    }
    
    public addItem(itemsInInventory : Item[]){
        itemsInInventory.push(this);
        console.log(`You add ${this.name} in your inventory !`)
    }
}