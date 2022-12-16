import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    border:${p => p.theme.borders.profile};
    max-width: 400px;
    margin: 0 auto;
`
export const Btn = styled.button`
    margin:20px 0 10px 20px;
    max-width: 100px;
    border:none;
    border-radius:10px;
    padding:10px;
   &:hover{
    background-color:#2f2f37;
    color:white;
   }
`
