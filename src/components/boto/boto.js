import React from "react";


const dirhola = () => console.log('hola');



export const BotoSeguent = (props) => <button onClick={dirhola}>
    {props.etiqueta}
    
  </button>


export const BotoAnterior = (props) => <button>
    {props.etiqueta}
</button>

