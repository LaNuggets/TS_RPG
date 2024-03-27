import Items from '../Items.ts'

export default class Ether extends Items {

    constructor() {
        super('Ether', 'restore 30% of the mana', 0, 0, 30)
    }
}