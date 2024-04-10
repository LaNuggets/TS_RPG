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
        return this.currentHp += hpGain
    }
    loseHp(hpLose: number): number{
        return this.currentHp -= hpLose
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

    specialAttack(enemiesFigthers:Character[]){
        if(this.name ==='Barbar'){

        }else if(this.name ==='Mage'){

        }else if(this.name ==='Paladin'){
            this.holySmash(enemiesFigthers)
        }else if(this.name ==='Priest'){
            
        }else if(this.name ==='Thief'){
            
        }else if(this.name ==='Warrior'){
            
        }
    }
    holySmash(enemiesFigthers: Character[]){
        for(let i=0;i<enemiesFigthers.length;i++){
            Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4);
            console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[i].name}\x1b[0m, \x1b[31m${enemiesFigthers[i].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4)}\x1b[0m damage !\n`)
        }
    }
    useItem(itemsInInventory:Item[],alliesFigthers:Character[]){
        let resp : string | null = null;
        let secondeResp : string | null = null;
        const itemsList = [];
        const corrrectNumber = [];

        console.log(`Here are the items you have !`);
        for(let i=0; i<itemsInInventory.length;i++){
            console.log(i+1+'- \x1b[36m'+itemsInInventory[i].name+'\x1b[0m'+` Its capacity is \x1b[34m${itemsInInventory[i].capacity}\x1b[0m`);
        }
        for(let j=0;j<itemsInInventory.length;j++){
            itemsList.push(j+1)
        }
        while(true){
            if(resp === null|| !itemsList.includes(parseInt(resp))){
                resp = prompt('Please choose a correcte number !')
            } else{
                break;
            }
        }
        itemsInInventory.splice(parseInt(resp),1)
        clear(true);
        console.log(`You use \x1b[36m${itemsInInventory[parseInt(resp)-1].name}\x1b[0m`);
        console.log('On Which character you want to use it ?');
        for(let i=0;i<alliesFigthers.length;i++){
            console.log(`${i+1}- ${alliesFigthers[i].name}`)
        }
        secondeResp=prompt('On Which character you want to use it ?');
        for(let k=0;k<alliesFigthers.length;k++){
            corrrectNumber.push(k+1)
        }
        while(true){
            if(secondeResp === null|| !corrrectNumber.includes(parseInt(secondeResp))){
                secondeResp = prompt('Please choose a correcte number !')
            } else{
                break;
            }
        }
        itemsInInventory[parseInt(resp)-1].usingItem(alliesFigthers[parseInt(secondeResp)-1]);
    }
}