//importar react
import React from "react";
import styled from "styled-components";




export const Escena = (props) => <EscenaStyled>
    {props.frase}
</EscenaStyled>


const EscenaStyled = styled.div`
    border: 2px solid black;
    border-radius: 40px;
    margin: 25px;
    
`;








