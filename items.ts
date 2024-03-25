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
}

const potion = new Item('Potion', 'restore 50% of a character', 50, 0, 0)
const star = new Item('Piece of Star', 'ressuscite a character with 20% pv or neath 50% of pv', 20, 50, 0)
const halfStar = new Item('Half Star', 'ressuscite a character or restore his full pv', 100, 100, 0)
const ether = new Item('Ether', 'restore 30% of the mana', 0, 0, 30)