import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body{
        margin: 0;
        background: ${({theme})=>theme.body};
        color: ${({theme})=>theme.text};
        font-family: 'Inter', sans-serif;
        transition: all 0.4s linear;
    }

    body::-webkit-scrollbar {
        display: none;
      }
      
      .invalid{
        border: 1px solid red;
      }
      
      h1 {
        font-size: 2em;
      }
      
      .main-container{
        width: 60vw;
        margin: auto;
        margin-top: 1em;
        margin-bottom: 1em;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-around;
      }
      
      input {
        border-color: transparent;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
      }
      
      .btn {
        background: hsl(205, 78%, 60%);
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border-color: transparent;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
      }
      
      .colors-container{
        margin: 2em;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        column-gap: 1em;
        row-gap: 1em;
      }
      
      .card{
        background-color: ${({theme})=>theme.card};
        padding: .7em; 
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        cursor: pointer;
        height: 310px;
        transition: all 0.4s linear;
      }
      
      .color{
        width: 100%;
        height: 200px;
      }
      
      h4{
        text-transform: uppercase;
      }
      
      .alert {
        opacity: 0.5;
        font-size: 12px;
      }
      
      .switch {
        position: relative;
        display: inline-block;
        width: 70px;
        height: 40px;

      }
      
      .switch input{
        display: none;
      }
      
      .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        border-radius: 34px;
        transition: 0.4s;
      }
      
      .slider:before{
        position: absolute;
        content: "";
        height: 30px;
        width: 30px;
        left: 5px;
        bottom: 5px;
        background-color: white;
        border-radius: 34px;
        transition: 0.4s;
      }
      
      input:checked + .slider{
        background-color: #e0e0e0;
      }
      
      input:checked + .slider:before{
        transform: translateX(30px);
      }
      

`;

export const lightTheme = {
    body: '#f5f5f5',
    text: 'black',
    card: 'white'
};

export const darkTheme = {
    body: 'black',
    text: 'white',
    card: '#222222'
};