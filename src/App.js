
import './App.css';
import React, {useState} from 'react';
import Escena from './components/escena/escena';
import { StyledButton } from './components/escena/boto.styled';

//importar arxiu json que conté les dades
import Dades from './dades.json'



function App() {

  //iterar l'array de les dades
  const escenes = Dades.map((item) => {
    return <div>
      <p>{item}</p>
    </div>
  });

  //estats de l'escena: blanc o vermell
  const [blanc] = useState(false);
  const [vermell] = useState(true);

  //arrays amb els estats de cada escena
  const estatEscena1 = [vermell, blanc, blanc, blanc];
  const estatEscena2 = [blanc, vermell, blanc, blanc];
  const estatEscena3 = [blanc, blanc, vermell, blanc];
  const estatEscena4 = [blanc, blanc, blanc, vermell];

  //estat del comptador
  const [count, setCount] = useState(0)

  function add() {
    
    if (count <= 2) {
       setCount(count + 1)
    } else {
        setCount(0);
      }
    }
    
  function subtract() {

      if (count == 0) {
        setCount(3)
      } else {
        setCount(count - 1);
      }
    }


  return (

    <div className="App">

      <StyledButton onClick={subtract}> Anterior </StyledButton>

      <StyledButton onClick={add}> Següent </StyledButton>

      <Escena
          frase = {escenes[0]}
          color = {estatEscena1[count]}
        />

        <Escena
          frase = {escenes[1]}
          color = {estatEscena2[count]}
        />

        <Escena
          frase = {escenes[2]}
          color = {estatEscena3[count]}
        />

        <Escena
          frase = {escenes[3]}
          color = {estatEscena4[count]}
        /> 
    </div>
  );
}

export default App;
