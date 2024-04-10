import Character from "../Character.ts"

export default class Boss extends Character {
    constructor(){
        super(false,'Boss',200,200,0,20,10,10,10,3,"Decimating Smash",true)
    }
}