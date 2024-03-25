export default class Fight {
    team: string;
    turnOrder: string;
    whosTurn: boolean;
    isAlive: boolean;
    winOrLose: boolean;

    constructor(team: string, turnOrder: string, whosTurn: boolean, isAlive: boolean, winOrLose: boolean){
        this.team = team
        this.turnOrder = turnOrder
        this.whosTurn = whosTurn
        this.isAlive = isAlive
        this.winOrLose = winOrLose
    }
}

const participants = new Fight('The 2 team fighting are :', '', true, true, true )
const order = new Fight('', 'The order of turn is:', true, false, true)
const turn = new Fight('', '', true, false, true )
const alive = new Fight('', '', true, true, true)
const end = new Fight('', '', true, false, false)