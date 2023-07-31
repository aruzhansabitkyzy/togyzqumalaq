import React from 'react'
import { BoardProps , BoardRead} from '@/utils/interfaces'
import Otau from '../ui/Otau'
import Qazandyq from '../ui/Qazandyq'
export class Board extends React.Component<BoardProps, BoardRead> {
      constructor(props:any) {
        super(props)

        this.state = {
          board: this.props.board,
          qazandyq1 : 0,
          qazandyq2 : 0, 
          tuzdyq1 : 0,
          tuzdyq2 : 0
        }

        this.handleMove = this.handleMove.bind(this)
        this.checkMove = this.checkMove.bind(this)
        this.checkTurn = this.checkTurn.bind(this)
        this.setTuzdyq = this.setTuzdyq.bind(this)
      }

      checkMove() {

      }
      handleMove() {

      }

      checkTurn() {
        
      }

      setTuzdyq() {

      }
      render() {

        return (
          <div className='board'>
              <div className="board__side opponentSide">
                   <div className='otaus'>
                       {this.state.board.filter(player => player.playerId == 1).reverse().map((el) => (
                           <div className='otau' key={el.playerId+el.id}>
                                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover}/>
                           </div>
                       ))}
                   </div>
              </div>
                <Qazandyq quantity = {this.state.qazandyq2}/>
                <Qazandyq quantity = {this.state.qazandyq2}/>
              <div className=" board__side mySide">
                   <div className='otaus'>
                   {this.state.board.filter(player => player.playerId == 2).reverse().map((el) => (
                           <div className='otau' key={el.playerId+el.id}>
                                <Otau quantity={el.count} tuzdyq={el.tuzdyq} hover={el.hover}/>
                           </div>
                       ))}
                   </div>
              </div>
          </div>
        )
      }
}
