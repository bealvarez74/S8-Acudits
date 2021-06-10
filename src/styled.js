import styled, {createGlobalStyle} from 'styled-components';
import fondo from './assets/img/fondo.jpg';


export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center; 
    background-image: url(${fondo});
    background-repeat: no-repeat;
    background-size:cover;
}
`;

export const Stylediv = styled.div`
    margin: 1.2rem;
    min-height: 300px;
    background-color:white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius:10px;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
`;

export const Stylebutton = styled.button`
    display:block;
    width:200px;
    margin:20px auto;
    background-color:turquoise;
    color:#fff;
    border:none;
    border-radius:5px;
    padding: 10px 20px;
    text-align:center;
    &:hover{
        background-color:grey;
        cursor:pointer;
    }
`;
