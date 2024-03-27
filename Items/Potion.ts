import Items from '../Items.ts'

export default class Potion extends Items {

    constructor() {
        super('Potion', 'restore 50% of a character', 50, 0, 0)
    }
}