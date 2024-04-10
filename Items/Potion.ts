import Item from '../Item.ts'

export default class Potion extends Item {
    constructor() {
        super('Potion', 'restore 50% of a character Hp', 50, 0, 0)
    }
}