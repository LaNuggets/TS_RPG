import Item from '../Items.ts'

export default class Star extends Item {
    constructor() {
        super('Piece of Star', 'ressuscite a character with 20% pv or neath 50% of pv', 20, 50, 0)
    }
}