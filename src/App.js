import imagenRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/characters";

function App() {
  const [characters, setCharacters] = useState(null); // Cambié character a characters

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const charactersApi = await api.json(); // Cambié characterApi a charactersApi
    console.log(charactersApi);

    setCharacters(charactersApi.results); // Cambié characterApi a charactersApi
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/> 
        ) : (
          <>
            <img
              src={imagenRickMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
