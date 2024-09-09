
import Player from "./components/Player.jsx";

function App() {
  

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>
          <Player initialName={'name1'}  symbol={'X'}></Player>
          <Player initialName={'name2'} symbol={'O'}></Player>
        </ol>

        game board
      </div>

      log
    </main>
  )
}

export default App
