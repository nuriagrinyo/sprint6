import React from "react";
import styled from "styled-components";



export const EscenaStyled = styled.div`
    border: 2px solid black;
    border-radius: 40px;
    margin: 25px;
    background-color: ${({fons}) => fons ? 'red' : 'white'};
    
`;

export const StyledButton = styled.button`

    height: 150px;
    width: 500px;
    border-radius: 15px;
    margin: 10px;
    

`;








