export default class Fight {
    team: string;
    turnOrder: string;
    whosTurn: string;
    isAlive: boolean;
    winOrLose: boolean;

    constructor(team: string, turnOrder: string, whosTurn: string, isAlive: boolean, winOrLose: boolean){
        this.team = team
        this.turnOrder = turnOrder
        this.whosTurn = whosTurn
        this.isAlive = isAlive
        this.winOrLose = winOrLose
    }
}

const participants = new Fight('The 2 team fighting are :', '', '', true, true )
const order = new Fight('', 'The order of turn is:', '', false, true)
const turn = new Fight('', '', 'The character ... can now play', false, true )
const alive = new Fight('', '', '', true, true)
const end = new Fight('', '', '', false, false)