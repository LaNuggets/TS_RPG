export default class Character {
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

    constructor(name: string, maxHp: number,currentHp : number, mana: number, 
    physical_Attack: number,physical_Defense: number, magical_Attack:number, magical_Defense:number, 
    attack_speed: number, special_Capacity:string, res : boolean) 
    {
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
        return this.currentHp + hpGain
    }
    loseHp(hpLose: number): number{
        return this.currentHp - hpLose
    }
}