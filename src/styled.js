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
    width:300px;
    height: 350px;
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
export const Styletemps = styled.div`
    position:absolute;
    top:20px;
    left:20px;
    width:100px;
    height:40px;
    background-color:red;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align:left;
    color:white;
`;

export const Stylewelcome = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size: 4rem;
    font-family: Arial, Helvetica, sans-serif;
    color:white;
     }
`;