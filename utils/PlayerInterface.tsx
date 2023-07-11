import Player from "@/gameManager/Player"

export interface PlayerContextType {
    player1: Player | null, 
    player2 : Player | null, 
    createPlayers: (user1: string, user2: string) => void
}
export interface PlayerContextProps {
  player1: Player | null, 
  player2 : Player | null, 
}