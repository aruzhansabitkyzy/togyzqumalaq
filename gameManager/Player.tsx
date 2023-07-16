class Player {
    username:string
    tuzdyq:number
    isGoing:boolean 
    isWinner: boolean
    score: number
    constructor(username:string) {
        this.username = username;
        this.score = 0;
        this.isGoing = false;
        this.setScore = this.setScore.bind(this);
        this.tuzdyq = -1;
        this.isWinner = false;
    }

    setScore(score:number) {
         if(typeof score === 'number')
            this.score+= score
    }
    setWinner(flag: boolean) {
       this.isWinner =flag;
    }
    getScore() {
        return this.score
    }
    setTuzdyq(number: number) {
        this.tuzdyq = number;
    }
    getTuzdyq() {
        return this.tuzdyq
    }
    isTuzdyq() {
         return this.getTuzdyq() != -1 
    }
    setTurn() {
        this.isGoing = true;
    }
    passTurn() {
        this.isGoing = false;
    }
    getTurn() {
        this.isGoing
    }
}
export default Player;