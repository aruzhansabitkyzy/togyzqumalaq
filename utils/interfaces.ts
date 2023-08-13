export interface BoardCell {
  playerId: number;
  id: number;
  count: number;
  hover: boolean;
  tuzdyq: boolean;
}
export interface OtauProps {
  quantity: number;
  tuzdyq: boolean;
  hover: boolean;
}
export interface QazanProp {
  quantity: number;
}
export interface Player {
  id: number,
  name: string, 
  tuzdyq: number, 
  score: number
}