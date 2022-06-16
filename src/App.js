import logo from './logo.svg';
import './App.css';
import Pokedex from './pokedex'
import Pokecards from './pokecard';

function App() {
  return (
    <div className="App">
      {Pokedex.map(p => (
        <div>
          <Pokecards id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        </div>
      ))}
    </div>
  );
}

export default App;
