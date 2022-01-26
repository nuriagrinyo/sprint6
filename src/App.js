
import './App.css';

import React, {useState, useRef} from 'react';

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

  const [blanc, setBlanc] = useState(false);

  const [vermell, setVermell] = useState(true);

  

  /*
  function canviarColorSeguent() {
    setVermell(prevState => !prevState)
    setBlanc(prevState => !prevState )
    
  }*/

  const Escena1 = useRef();

  function canviarColorSeguent() {
    if (Escena1 == blanc){
      setVermell(prevState => !prevState)

    } else if (blanc){
      setBlanc(prevState => !prevState)
    }
    
  }

  





  
  return (

    <div className="App">


      <StyledButton > Anterior </StyledButton>

      <StyledButton onClick={canviarColorSeguent}> Següent </StyledButton>
            

            
      <Escena ref={Escena1}
        frase = {escenes[0]}
        color = {blanc}
        

        
     
      />

      <Escena
        frase = {escenes[1]}
        color = {blanc}
        
        
        
      
      />

      <Escena
        frase = {escenes[2]}
        color = {blanc}
        
        
      
      />

      <Escena
        frase = {escenes[3]}
        color = {blanc}
        
      
      />


      
     
      

  
    </div>
  );
}

export default App;
