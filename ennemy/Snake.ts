import Character from './Characters.ts'

export default class Snake extends Character {

    constructor() {
        super('Snake', 100, 100, 7, 7, 3, 3, 5, 9, 'fatal_bazooka', true)
    }
}
