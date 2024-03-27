export default class Character {
    race: boolean;
    name: string;
    pvMax: number;
    pvCurrent: number;
    mana: number;
    physical_Attack: number;
    physical_Defense: number;
    magical_Attack: number;
    magical_Defense: number;
    attack_speed: number;
    special_Capacity: string;
    res: boolean;

    constructor(race: boolean, name: string, pvMax: number, pvCurrent: number, mana: number,
        physical_Attack: number, physical_Defense: number, magical_Attack: number, magical_Defense: number,
        attack_speed: number, special_Capacity: string, res: boolean) {

        this.race = race;
        this.name = name;
        this.pvMax = pvMax;
        this.pvCurrent = pvCurrent;
        this.mana = mana;
        this.physical_Attack = physical_Attack;
        this.physical_Defense = physical_Defense;
        this.magical_Attack = magical_Attack;
        this.magical_Defense = magical_Defense;
        this.attack_speed = attack_speed;
        this.special_Capacity = special_Capacity;
        this.res = res;
    }

   
}

const warrior = new Character(true, 'Warrior', 100, 100, 20, 10, 7, 1, 1, 5, 'wrath_Of_God', true);
const mage = new Character(true, 'Mage', 70, 70, 100, 1, 1, 10, 7, 5, 'firebolt', true);
const paladin = new Character(true, 'Paladin', 110, 110, 50, 5, 7, 5, 7, 3, 'protection', true);
const barbar = new Character(true, 'Barbar', 100, 100, 10, 10, 5, 1, 1, 8, 'destruction', true);
const priest = new Character(true, 'Priest', 60, 60, 100, 4, 6, 5, 6, 1, 'healing', true);
const thief = new Character(true, 'Thief', 80, 80, 70, 7, 4, 7, 4, 10, 'theft', true);

const snake = new Character(false, 'Snake', 100, 100, 7, 7, 3, 3, 5, 8, '', true);
const ogre = new Character(false, 'Ogre', 100, 100, 7, 7, 3, 3, 5, 7, '', true);
const goblin = new Character(false, 'Goblin', 100, 100, 7, 7, 3, 3, 5, 5, '', true);
const orque = new Character(false, 'Orque', 100, 100, 7, 7, 3, 3, 5, 5, '', true);
const spider = new Character(false, 'Spider', 100, 100, 7, 7, 3, 3, 5, 8, '', true);
const arabe = new Character(false, "Merhmoud", 1000, 1000, 250, 10, 10, 10, 10, 10, 'allah uakbar', true);

const player = new Character(true, 'Player', 0, 0, 0, 0, 0, 0, 0, 0, '', true);

 
