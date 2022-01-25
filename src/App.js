
import './App.css';

import React, {useState} from 'react';

import { IterarEscenes } from './escenesGrup';
import Botons from './components/boto/botons';





function App() {

  
  return (

    <div className="App">


      <Botons />
     
      <IterarEscenes />

  
    </div>
  );
}

export default App;
