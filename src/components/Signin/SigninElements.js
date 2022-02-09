//SIGN IN ELEMENTS

//IMPORTING
import styled from 'styled-components';
import { Link } from 'react-router-dom'

//CONTAINER
export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    top: 0;
    z-index : 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1,147,86,1) 0%,
        rgba(40 , 40 , 40, 1) 100%

    );
`;

//FORM WRAP
export const FormWrap = styled.div`
    height: 100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width) {
        height: 80%
    }
`;

//ICON
export const Icon = styled(Link)`
    margin-left:32px;
    margin-top: 32px;
    text-decoration : none;
    color: #fff;
    font-weight:700;
    font-size: 32px;


     @media screen and (max-width: 480px){
         margin-left:16px;
         margin-top:8px;
     }
`
//FORM CONTENT
export const FormContent = styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width : 480px){
        padding : 10px;
    }

`;

//FORM
export const Form = styled.form`
    background : #010101;
    max-width : 400px;
    height : auto;
    width : 100%;
    z-index : 1;
    display : grid;
    margin : 0 auto;
    padding : 80px 32px;
    border-radius: 4px;
    box-shadow : 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width : 400px){
        padding : 32px 32px;
    }

`;

//FORM H1
export const FormH1 = styled.h1`
    margin-bottom  :40px;
    color: #fff;
    font-size : 20px;
    font-weight : 400;
    text-align : center;
`;

//FORM LABEL
export const FormLabel = styled.label`
    margin-bottom : 8px;
    font-size : 14px;
    color : #fff;

`;

//FORM INPUT
export const FormInput = styled.input`
    padding : 16px 16px;
    margin-bottom : 32px;
    border : none;
    border-radius : 4px;
`;

//FORM BUTTON
export const FormButton = styled.button`
    background : #01bf71;
    padding : 16px 0;
    border  :none;
    border-radius : 4px;
    color : #fff;
    font-size : 20px;
    cursor: pointer;
`;

//TEXT
export const Text =  styled.span`
    align-items : center;
    color : #fff;
    margin-top: 24px;
    font-size : 14px;
`;
