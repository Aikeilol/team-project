import Slytherin from '../../slytherin'
import './style.css'

function Game() {
  return (
    <div className="game">
      <h1>Управление стрелками, Space - пауза</h1>
      <div className="game-board">
        <Slytherin />
      </div>
    </div>
  )
}

export default Game
