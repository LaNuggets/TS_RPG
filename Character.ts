import Item from "./Item.ts";
import Ether from './Items/Ether.ts';
import Halfstar from './Items/Halfstar.ts';
import Potion from "./Items/Potion.ts";
import Star from "./Items/Star.ts";

import clear from "console-clear"


export default class Character {
    team : boolean;
    name : string;
    maxHp : number;
    currentHp : number;
    mana : number;  
    physical_Attack : number;
    physical_Defense : number;
    magical_Attack : number;
    magical_Defense : number;
    attack_speed : number;
    special_Capacity : string;
    res : boolean;

    constructor(team : boolean, name: string, maxHp: number,currentHp : number, mana: number, 
    physical_Attack: number,physical_Defense: number, magical_Attack:number, magical_Defense:number, 
    attack_speed: number, special_Capacity:string, res : boolean)
    {
        this.team = team;
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.mana = mana;
        this.physical_Attack = physical_Attack;
        this.physical_Defense = physical_Defense;
        this.magical_Attack = magical_Attack;
        this.magical_Defense = magical_Defense;
        this.attack_speed = attack_speed;
        this.special_Capacity = special_Capacity;
        this.res = res;
    }
    gainHp(hpGain: number): number{
        return this.currentHp += hpGain;
    }
    loseHp(hpLose: number): number{
        return this.currentHp -= hpLose;
    }

    monsterTurn(alliesFigthers:Character[]){ 
        let minimumHpIndex = 0;
        const randomNumber = Math.floor(Math.random() * 5) + 1;
                if(randomNumber==1){
                    for(let k=0; k < alliesFigthers.length; k++){
                        if(alliesFigthers[k].currentHp < alliesFigthers[minimumHpIndex].currentHp) {
                            minimumHpIndex = k;
                        }
                    }
                    alliesFigthers[minimumHpIndex].loseHp(this.physical_Attack);
                    console.log(`The \x1b[31m${this.name}\x1b[0m has attack the \x1b[32m${alliesFigthers[minimumHpIndex].name}\x1b[0m, \x1b[32m${alliesFigthers[minimumHpIndex].name}\x1b[0m has lose \x1b[38;5;208m${this.physical_Attack}\x1b[0m Hp, he has \x1b[38;5;208m${alliesFigthers[minimumHpIndex].currentHp}\x1b[0m Hp left.\n`);

                }else{
                    const random = Math.floor(Math.random() * alliesFigthers.length);
                    alliesFigthers[random].loseHp(this.physical_Attack);
                    console.log(`The \x1b[31m${this.name}\x1b[0m has attack the \x1b[32m${alliesFigthers[random].name}\x1b[0m, \x1b[32m${alliesFigthers[random].name}\x1b[0m has lose \x1b[38;5;208m${this.physical_Attack}\x1b[0m Hp, he has \x1b[38;5;208m${alliesFigthers[random].currentHp}\x1b[0m Hp left.\n`);
                }
    }

    specialAttack(enemiesFigthers:Character[], alliesFighters: Character[], itemsInInventory: Item[]){
        if(this.name ==='Barbar'){
            this.berserk(enemiesFigthers);
        }else if(this.name ==='Mage'){
            this.firebolt(enemiesFigthers);
        }else if(this.name ==='Paladin'){
            this.holySmash(enemiesFigthers);
        }else if(this.name ==='Priest'){
            this.healing(alliesFighters);
        }else if(this.name ==='Thief'){
            this.theft(itemsInInventory);
        }
    }

    holySmash(enemiesFigthers: Character[]){
        for(let i=0;i<enemiesFigthers.length;i++){
            Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4);
            console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[i].name}\x1b[0m, \x1b[31m${enemiesFigthers[i].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4)}\x1b[0m damage !`);
            console.log(`He has \x1b[38;5;208m${this.currentHp}\x1b[0m Hp left.\n`);
        }
    }

    berserk(enemiesFigthers: Character[]) {
        const randomTarget = Math.floor(Math.random() * enemiesFigthers.length);
        const hpLost = Math.ceil(this.currentHp * 0.2);
        this.currentHp -= hpLost;
        Math.ceil((this.physical_Attack-enemiesFigthers[randomTarget].physical_Defense)*1.3);
        console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[randomTarget].name}\x1b[0m, \x1b[31m${enemiesFigthers[randomTarget].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.physical_Attack-enemiesFigthers[randomTarget].physical_Defense)*1.3)}\x1b[0m damage !`);
        console.log(`He has \x1b[38;5;208m${this.currentHp}\x1b[0m Hp left.\nHowever the barbar lost \x1b[38;5;208m${hpLost}\x1b[0m Hp by using his special attack ! He has now \x1b[38;5;208m${this.currentHp - hpLost}\x1b[0m Hp left`);
    }

    firebolt(enemiesFigthers: Character[]) {
        const manaLost = Math.ceil(this.mana * 0.5);
        this.mana -= manaLost;
        for(let i=0;i<enemiesFigthers.length;i++){
            const damage = Math.ceil(this.magical_Attack * 1.5);
            enemiesFigthers[i].currentHp -= damage;
            console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[i].name}\x1b[0m, \x1b[31m${enemiesFigthers[i].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.magical_Attack)*1.5)}\x1b[0m damage ! He has \x1b[38;5;208m${enemiesFigthers[i].currentHp}\x1b[0m Hp left.\n`);
        }
        console.log(`The \x1b[32m${this.name}\x1b[0m has lost \x1b[38;5;200m${manaLost}\x1b[0m of mana and has now \x1b[38;5;200m${this.mana}\x1b[0m left`);
    }

    healing(alliesFigthers: Character[]) {
        const heal = Math.ceil(this.currentHp * 1.25);
        const goodChoice = [];
        for(let h=0; h<alliesFigthers.length;h++) {
            if(alliesFigthers[h].res == true) {
                goodChoice.push(h + 1);
            }
        } 
        console.log(`Here are the allies you can heal : `)
        for(let i=0; i<alliesFigthers.length;i++) {
            console.log(`${i + 1} - ${alliesFigthers[i].name}`)
        }
            let choice = prompt('Who do you want to heal ?');
            while(true) {
                if(choice == null || !(goodChoice.includes(parseInt(choice)))) {
                   choice = prompt('Choose a correct number !');
                } else {
                    break;
                }
            }
                    alliesFigthers[parseInt(choice) - 1].currentHp = heal;
                    if(alliesFigthers[parseInt(choice) - 1].currentHp > this.maxHp) {
                        alliesFigthers[parseInt(choice) - 1].currentHp = this.maxHp;

                }
                return console.log(`The \x1b[32m${this.name}\x1b[0m has healed the \x1b[32m${alliesFigthers[parseInt(choice) - 1].name}\x1b[0m and has restore \x1b[38;5;208m${heal}\x1b[0m Hp. He has now \x1b[38;5;208m${this.currentHp}\x1b[0m Hp`);
            }

            theft(itemsInInventory: Item[]) {
                const potion = new Potion;
                const ether = new Ether;
                const halfstar = new Halfstar;
                const star = new Star;
                const robberyChance = Math.floor(Math.random() * 100) + 1;
                if(robberyChance <= 40) {
                    console.log(`The \x1b[32m${this.name}\x1b[0m didn't stole anything`);
                }else if(robberyChance <= 70) {
                    itemsInInventory.push(potion);
                    console.log(`The \x1b[32m${this.name}\x1b[0m has stole a potion !`);
                }else if(robberyChance <= 85) {
                    itemsInInventory.push(star);
                    console.log(`The \x1b[32m${this.name}\x1b[0m has stole an star !`);
                }else if(robberyChance <= 90){
                    itemsInInventory.push(ether);
                    console.log(`The \x1b[32m${this.name}\x1b[0m has stole an ether !`);
                }else if(robberyChance <= 95){
                    itemsInInventory.push(halfstar);
                    console.log(`The \x1b[32m${this.name}\x1b[0m has stole an halfstar`);
                }
            }

            useItem(itemsInInventory:Item[],alliesFigthers:Character[]){
                let resp : string | null = null;
                let secondeResp : string | null = null;
                const itemsList = [];
                const corrrectNumber = [];
        
                console.log(`Here are the items you have !`);
                for(let i=0; i<itemsInInventory.length;i++){
                    console.log(i+1+'- \x1b[36m'+itemsInInventory[i].name+'\x1b[0m'+` Its capacity is \x1b[34m${itemsInInventory[i].capacity}.\x1b[0m`);
                }
                for(let j=0;j<itemsInInventory.length;j++){
                    itemsList.push(j+1);
                }
                resp = prompt('Choose the item you want to use !');
                while(true){
                    if(resp === null|| !itemsList.includes(parseInt(resp))){
                        resp = prompt('Please choose a correcte number !');
                    } else{
                        break;
                    }
                }
        
                clear(true);
                console.log(`You use \x1b[36m${itemsInInventory[parseInt(resp)-1].name}\x1b[0m`);
                console.log('On Which character you want to use it ?');
                for(let i=0;i<alliesFigthers.length;i++){
                    console.log(`${i+1}- \x1b[32m${alliesFigthers[i].name}\x1b[0m`);
                }
                secondeResp=prompt('On Which character you want to use it ?');
                for(let k=0;k<alliesFigthers.length;k++){
                    corrrectNumber.push(k+1);
                }
                while(true){
                    if(secondeResp === null|| !corrrectNumber.includes(parseInt(secondeResp))){
                        secondeResp = prompt('Please choose a correct number !');
                    } else{
                        break;
                    }
                }
                itemsInInventory[parseInt(resp)-1].usingItem(alliesFigthers[parseInt(secondeResp)-1]);
                itemsInInventory.splice((parseInt(resp)-1),1);
            }
        }
