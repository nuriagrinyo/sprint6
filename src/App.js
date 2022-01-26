
import './App.css';

import React, {useState} from 'react';

import Escena from './components/escena/escena';

//importar arxiu json que conté les dades
import Dades from './dades.json'





function App() {


  //iterar l'array de les dades
  const escenes = Dades.map((item) => {

    return <div>
      <p>{item}</p>
    </div>

  });


  const [vermell, setVermell] = useState(false);

  const canviarColor = () => {
    setVermell(true);
}



  
  return (

    <div className="App">


    <button onClick={canviarColor}>Anterior</button>

    <button onClick={canviarColor}>Següent</button>




    <Escena 
      frase = {escenes[0]}
      vermell={vermell}
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
