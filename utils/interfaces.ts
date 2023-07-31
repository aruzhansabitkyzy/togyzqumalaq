export interface BoardCell  {
    playerId: number 
    id: number 
    count: number 
    hover: boolean,
    tuzdyq: boolean
}
export interface GameType {
    turn: number, 
    winner: number, 
    complete: boolean, 
    mode: string, 
    board: BoardCell[]
}
export interface OtauProps {
    quantity: number,
    tuzdyq: boolean,
    hover: boolean
}
export interface QazanProp {
    quantity: number
}
export interface SideBarProps {
    turn: number,
    winner: number,
    complete :boolean,
    mode: string,
    board: BoardCell[],
    resetBoard : () => void,
    exitGame : () => void
}
export interface BoardProps {
    turn: number,
    winner: number,
    complete :boolean,
    mode: string,
    board: BoardCell[],
    completed : (winner:number) => void,
    updateTurn : () => void,
    updateBoard : () => void,
}
export interface BoardRead {
    board: BoardCell[]
    qazandyq1 : number,
    qazandyq2 : number, 
    tuzdyq1 : number,
    tuzdyq2 : number
}
export interface Player {
    uid: string | undefined;
    turnId: number;
    name: string;
    creator: boolean;
}