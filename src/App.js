
import './App.css';

import React, {useState} from 'react';


import { BotoSeguent, BotoAnterior } from './components/boto/boto';
import { IterarEscenes } from './escenesGrup';




function App() {

  

  



  return (
    <div className="App">

      
      <BotoAnterior 
      etiqueta = {'Anterior'}
      />


      <BotoSeguent 
        etiqueta = {'Següent'}
        
      />



      {IterarEscenes()}

    
    


    

    
      
    </div>
  );
}

export default App;
