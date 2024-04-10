import Item from '../Item.ts'

export default class Star extends Item {
    constructor() {
        super('Piece of Star', 'ressuscite a character with 20% Hp or neath 50% of Hp', 20, 50, 0)
    }
}