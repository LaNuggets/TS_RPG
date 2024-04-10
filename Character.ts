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

    specialAttack(enemiesFigthers:Character[], alliesFighters: Character[]){
        if(this.name ==='Barbar'){
            this.berserk(enemiesFigthers)
        }else if(this.name ==='Mage'){
            this.firebolt(enemiesFigthers)
        }else if(this.name ==='Paladin'){
            this.holySmash(enemiesFigthers)
        }else if(this.name ==='Priest'){
            this.healing(alliesFighters)
        }else if(this.name ==='Thief'){
            
        }
    }
    holySmash(enemiesFigthers: Character[]){
        for(let i=0;i<enemiesFigthers.length;i++){
            Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4);
            console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[i].name}\x1b[0m, \x1b[31m${enemiesFigthers[i].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.physical_Attack-enemiesFigthers[i].physical_Defense)*0.4)}\x1b[0m damage ! He has \x1b[38;5;208m${this.currentHp}\x1b[0m Hp left.\n`);
        }
    }

    berserk(enemiesFigthers: Character[]) {
        const randomTarget = Math.floor(Math.random() * enemiesFigthers.length);
        const hpLost = Math.ceil(this.currentHp * 0.2);
        this.currentHp -= hpLost;
        Math.ceil((this.physical_Attack-enemiesFigthers[randomTarget].physical_Defense)*1.3);
        console.log(`The \x1b[32m${this.name}\x1b[0m has damage \x1b[31m${enemiesFigthers[randomTarget].name}\x1b[0m, \x1b[31m${enemiesFigthers[randomTarget].name}\x1b[0m has take \x1b[38;5;208m${Math.ceil((this.physical_Attack-enemiesFigthers[randomTarget].physical_Defense)*1.3)}\x1b[0m damage ! He has \x1b[38;5;208m${this.currentHp}\x1b[0m Hp left.\nHowever the barbar lost \x1b[38;5;208m${hpLost}\x1b[0m Hp by using his special attack ! He has now \x1b[38;5;208m${this.currentHp - hpLost}\x1b[0m Hp left`);
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
        const goodChoice = []
        for(let h=0; h<alliesFigthers.length;h++) {
            if(alliesFigthers[h].res == true) {
                goodChoice.push(h + 1)
            }
        } 
        console.log(`Here are the allies you can heal : `)
        for(let i=0; i<alliesFigthers.length;i++) {
            console.log(`${i + 1} - ${alliesFigthers[i].name}`)
        }
            let choice = prompt('Who do you want to heal ?')
            while(true) {
                if(choice == null || !(goodChoice.includes(parseInt(choice)))) {
                   choice = prompt('Choose a correct number !')
                } else {
                    break
                }
            }
                    alliesFigthers[parseInt(choice) - 1].currentHp = heal;
                    if(alliesFigthers[parseInt(choice) - 1].currentHp > this.maxHp) {
                        alliesFigthers[parseInt(choice) - 1].currentHp = this.maxHp

                }
                return console.log(`The \x1b[32m${this.name}\x1b[0m has healed the \x1b[32m${alliesFigthers[parseInt(choice) - 1].name}\x1b[0m and has restore \x1b[38;5;208m${heal}\x1b[0m Hp. He has now \x1b[38;5;208m${this.currentHp}\x1b[0m Hp`)
            }
        }
