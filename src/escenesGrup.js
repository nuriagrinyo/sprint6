import React from "react";
import { Escena } from "./components/escena/escena";


//importar arxiu json que conté les dades
import Dades from './dades.json';




export function IterarEscenes() {

//iterar l'array de les dades
const escenes = Dades.map((item) => {
    return <div>
      <p>{item}</p>
    </div>
  });





    return <div>


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
    
}