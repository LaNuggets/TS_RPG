import Item from '../Items.ts'

export default class Halfstar extends Item {
    constructor() {
        super('Half Star', 'ressuscite a character or restore his full pv', 100, 100, 0)
    }
}