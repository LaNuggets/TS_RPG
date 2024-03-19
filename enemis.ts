class Enemy {
    type = '';
    pv = 0;
    physical_Attack = 0;
    physical_Defense = 0;
    magical_Attack = 0;
    magical_Defense = 0;
    attack_speed = 0;

    constructor(type: string, pv: number, physical_Attack: number, physical_Defense: number, magical_Attack:number, magical_Defense:number, attack_speed: number) {
        this.type = type;
        this.pv = pv;
        this.physical_Attack = physical_Attack;
        this.physical_Defense = physical_Defense;
        this.magical_Attack = magical_Attack;
        this.magical_Defense = magical_Defense;
        this.attack_speed = attack_speed;
    }
}

const snake = new Enemy('Snake', 100,7,7,3,3,5);
const ogre = new Enemy('Ogre', 100,7,7,3,3,5);
const goblin = new Enemy('Goblin', 100,7,7,3,3,5);
const orque = new Enemy('Orque', 100,7,7,3,3,5);
const spider = new Enemy('Spider', 100,7,7,3,3,5);
