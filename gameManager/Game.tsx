class Game {
    board:Array<Array<number>>
    player1: Player
    player2: Player
    currentPlayer: Player
    
    constructor(player1:Player, player2:Player) {
        this.player1 = player1
        this.player2 = player2 
        this.board = [[9,9,9,9,9,9,9,9,9], [9,9,9,9,9,9,9,9,9]]
        this.currentPlayer = this.player1
        this.startGame()
    }
 
 
    startGame() {
        this.currentPlayer.isGoing = true;
    }
 
    switchTurn(currentPlayer:Player) {
       this.currentPlayer.isGoing = false
       var cur = currentPlayer === this.player1 ? 0 : 1
       this.currentPlayer = cur ? this.player1 : this.player2
       this.currentPlayer.isGoing = true
    }
 
    makeMove(startingIndex:number) {
        if(this.currentPlayer.isGoing == true) {
            // the index of current player
            var curPlayerInd = (this.currentPlayer === this.player1) ? 0 : 1;
 
            // is it being distributed on opponent's side
            var isOpponentsSide = false;
            // count of qumalaqs on starting position
            var qumalaqs = this.board[curPlayerInd][startingIndex];
            
            // if 0 then stop
            if(qumalaqs <= 0) return
 
            // leave 1 in cur position
            this.board[curPlayerInd][startingIndex] = 1;
            qumalaqs--;
            startingIndex++;
 
            while(qumalaqs > 0) {
                console.log("before " + startingIndex + " " + qumalaqs)
                // after we're done this our side we go on to opponent's side to distribute qumalaq
                if(startingIndex == this.board[curPlayerInd].length) {
                    curPlayerInd = curPlayerInd==1 ? 0 : 1;
                    startingIndex--;
                    isOpponentsSide = true;
                }
                // if the current otau is not tuzdyq then we add 1 to a otau, otherwise assign it to qazandyq
                if(this.player1.isTuzdyq(startingIndex)) this.player1.setScore(1);
                else if(this.player2.isTuzdyq(startingIndex)) this.player2.setScore(1); 
                else this.board[curPlayerInd][startingIndex] += 1;
                qumalaqs != 1 ? (isOpponentsSide ? startingIndex-- : startingIndex++) : startingIndex+0
                qumalaqs--;
            }
             var lastOtau = this.board[curPlayerInd][startingIndex]
 
           if(lastOtau % 2 == 0 ) {
               this.currentPlayer.setScore(lastOtau);
               this.board[curPlayerInd][startingIndex] = 0;
            }
            if(lastOtau == 3) {
                this.currentPlayer.tuzdyq = startingIndex;
            }
 
           this.switchTurn(this.currentPlayer)
        }
    }
 
    showBoard() {
        console.log(this.board)
    }
    endGame() {
        this.player1.isGoing =false;
        this.player2.isGoing = false;
    }
 }
 
 
 
 