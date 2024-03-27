import Item from '../Items.ts'

export default class Ether extends Item {
    constructor() {
        super('Ether', 'restore 30% of the mana', 0, 0, 30)
    }
}