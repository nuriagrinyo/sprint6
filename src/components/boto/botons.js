import React from "react";
import { useState } from "react";


export default function Botons() {


    const [vermell, setVermell] = useState(false);

    const canviarColor = () => {
        setVermell(true);
    }





    


    const dirhola = () => {console.log('hola')};

    const diradeu = () => {console.log('adeu')};


    return (

        <div>

            <button onClick={dirhola}>Anterior</button>

            <button onClick={diradeu}>Següent</button>



        </div>

        


        


    )
    
}


