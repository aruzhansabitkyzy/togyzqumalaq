import { Player } from "@/utils/interfaces"
export default class GameOn {
    PLAYER_ONE: string
    PLAYER_TWO: string
    turn: string
    // turn : {}
    // complete: boolean
    // winner: {}
    constructor(player1:string, player2: string) {
        this.PLAYER_ONE = player1
        this.PLAYER_TWO = player2
        this.turn = this.PLAYER_ONE
    }
 
    getTurn() {
        return this.turn;
    }
    setTurn(value:string) {
        this.turn = value;
    }
    updateBoard() {

    }
    updateTurn() {
        if(this.turn === this.PLAYER_ONE) {
            this.setTurn(this.PLAYER_TWO)
        }
        else {
            this.setTurn(this.PLAYER_ONE)
        }
    }
}