//importar react
import React from "react";
import { EscenaStyled } from "./escena.styled";


export default function Escena(props) {

    

    return (
        
        <div>

                {props.color}

            <EscenaStyled  fons = {props.color} >

                
                {props.frase}

            </EscenaStyled>

        </div>

    )

}










    








