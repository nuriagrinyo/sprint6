import React from "react";
import styled from "styled-components";
import { EscenaStyled } from "../escena/escena.styled";


const dirhola = () => console.log('hola');






export const BotoSeguent = (props) => <button onClick={dirhola}>
    {props.etiqueta}
    
  </button>


export const BotoAnterior = (props) => <button>
    {props.etiqueta}
</button>

