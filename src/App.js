
import './App.css';

import React, {useState} from 'react';

import { Escena } from './components/escena/escena';
import { BotoSeguent, BotoAnterior } from './components/boto/boto';
import { iterarEscenes } from './escenesGrup';




function App() {

  

  



  return (
    <div className="App">

      
      <BotoAnterior 
      etiqueta = {'Anterior'}
      />


      <BotoSeguent 
        etiqueta = {'Següent'}
        
      />



      {iterarEscenes()}

    
    


    

    
      
    </div>
  );
}

export default App;
