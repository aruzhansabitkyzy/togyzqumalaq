class Player {
    username:string
    tuzdyq:number
    isGoing:boolean 
    score: number
    constructor(username:string) {
        this.username = username;
        this.score = 0;
        this.isGoing = false;
        this.setScore = this.setScore.bind(this);
        this.tuzdyq = -1;
    }

    setScore(score:number) {
         if(typeof score === 'number')
            this.score+= score
    }

    getScore() {
        return this.score
    }
    isTuzdyq(index:number) {
         return index == this.tuzdyq   
    }
}
export default Player;