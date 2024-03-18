class Character {
    type = '';
    pv = 0;
    mana = 0;
    physical_Attack = 0;
    physical_Defense = 0;
    magical_Attack = 0;
    magical_Defense = 0;
    attack_speed = 0;
    special_Capacity = '';

    constructor(type: string, pv: number, mana: number, physical_Attack: number, physical_Defense: number, magical_Attack:number, magical_Defense:number, attack_speed: number, special_Capacity:string) {
        this.type = type;
        this.pv = pv;
        this.mana = mana;
        this.physical_Attack = physical_Attack;
        this.physical_Defense = physical_Defense;
        this.magical_Attack = magical_Attack;
        this.magical_Defense = magical_Defense;
        this.attack_speed = attack_speed;
        this.special_Capacity = special_Capacity;
    }
}

const warrior = new Character('Warrior', 100,20,10,7,1,1,5,'wrath_Of_God')
const mage = new Character('Mage', 70,100,1,1,10,7,5,'firebolt')
const paladin = new Character('Paladin', 110,50,5,7,5,7,3,'protection')
const barbar = new Character('Barbar', 100,10,10,5,1,1,8,'destruction')
const priest = new Character('Priest', 60,100,4,6,5,6,1,'healing')
const thief = new Character('Thief', 80,70,7,4,7,4,10,'theft')
