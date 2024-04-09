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
}