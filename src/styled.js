
import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:pink;
    background-image: url("assets/img/fondo.jpg");
    background-repeat: no-repeat;
    background-size:cover;   
}
`;

export const Stylediv = styled.div`
background-color:white;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius:10px;
padding: 10px 20px;
font-size: 1.2rem;
font-family: Arial, Helvetica, sans-serif;
`;

export const Stylebutton = styled.button`
    width:200px;
    display:block;
    margin:auto;
    padding: 10px 20px;
    border-radius:3px;
    border:none;
    color: white;
    background-color:#000;
     &:hover{background-color:grey}
`;
