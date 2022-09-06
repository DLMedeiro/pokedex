
import './App.css';
import Pokedex from './pokedex'
import Pokecards from './pokecard';

function App() {
  return (
    <div className="App">
      <h1>Pokedex Index</h1>
      {Pokedex.map(p => (
        <div class="card">
          <Pokecards id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        </div>
      ))}
    </div>
  );
}

export default App;
