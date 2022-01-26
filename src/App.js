
import './App.css';

import React, {useState} from 'react';

import Escena from './components/escena/escena';
import { EscenaStyled, StyledButton } from './components/escena/escena.styled';

//importar arxiu json que conté les dades
import Dades from './dades.json'



function App() {


  //iterar l'array de les dades
  const escenes = Dades.map((item) => {

    return <div>
      <p>{item}</p>
    </div>

  });


  //estat pintat de color vermell
  const [vermell, setVermell] = useState(false);

  const canviarVermell = () => {
    setVermell(true);
  }


  const [blanc, setBlanc] = useState (true);
  const canviarBlanc = () => {
    setBlanc(false);
  }



  
  return (

    <div className="App">


      <StyledButton onClick={canviarVermell}> Anterior </StyledButton>

      <StyledButton onClick={canviarBlanc}> Següent </StyledButton>
            

            
      <Escena
        frase = {escenes[0]}
        color = {vermell}
     
      />

      <Escena
        frase = {escenes[1]}
        color = {vermell}
      
      />

      <Escena
        frase = {escenes[2]}
        color = {vermell}
      
      />

      <Escena
        frase = {escenes[3]}
        color = {vermell}
      
      />


      
     
      

  
    </div>
  );
}

export default App;
