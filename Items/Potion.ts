import Item from '../Items.ts'

export default class Potion extends Item {
    constructor() {
        super('Potion', 'restore 50% of a character', 50, 0, 0)
    }
}