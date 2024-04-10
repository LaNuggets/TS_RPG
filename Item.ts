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

    addItem(itemsInInventory : Item[]){
        itemsInInventory.push(this);
        console.log(`You add ${this.name} in your inventory !`)
    }
}