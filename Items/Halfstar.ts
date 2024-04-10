import Item from '../Item.ts'

export default class Halfstar extends Item {
    constructor() {
        super('HalfStar', 'ressuscite a character or restore his full Hp', 100, 100, 0)
    }
}