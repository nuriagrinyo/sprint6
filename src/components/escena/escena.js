//importar react
import React from "react";
import { EscenaStyled } from "./escena.styled";




export default function Escena(props) {

    return (



        <div>

            

                <EscenaStyled 

                fons={true}
                
                
                >

                    {props.vermell}

                    {props.frase}

                </EscenaStyled> 


        </div>

    )

}









    








