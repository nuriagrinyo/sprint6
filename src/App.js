
import './App.css';

import { Escena } from './components/escena/escena';

//importar arxiu json que conté les dades
import Dades from './dades.json';


function App() {

  //iterar l'array de les dades
  const escenes = Dades.map((item) => {
    return <div>
      <p>{item}</p>
    </div>
  });

  return (
    <div className="App">

    <Escena
      frase = {escenes[0]}
      />

    <Escena
      frase = {escenes[1]}
      />

    <Escena
      frase = {escenes[2]}
      />

    <Escena
      frase = {escenes[3]}
      />

    
      
    </div>
  );
}

export default App;
