import Player from "@/gameManager/Player"

export interface PlayerContextType {
    player1: Player | null, 
    player2 : Player | null, 
    createPlayers: (user1: string, user2: string) => void,
    setContextScore : (score: number, playerId:number) => void,
    setContextTuzdyq : (otauId: number, playerId: number) => void,
    setContextWinner : (playerId: number) => void
}
export interface PlayerContextProps {
  player1: Player | null
  player2 : Player | null
}
export interface GeneralPlayerContext {
  player: Player | null
}