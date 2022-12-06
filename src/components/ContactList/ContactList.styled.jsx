import styled from "styled-components";


export const List = styled.ul`
list-style: inside;
margin-top:10px;
padding-bottom:10px;
`
export const Item = styled.li`
padding: 5px 10px;
margin-left: 20px;
margin-right: 20px;
margin-bottom:10px;
display: flex;
justify-content: space-between;
border-radius:10px;
`
export const Btn = styled.button`
    border:none;
    border-radius:10px;
    padding-top: 5px;
    padding-bottom: 5px;
   &:hover{
    background-color:#2f2f37;
    color:white;
   }
`
export const ItemNav = styled.div`
display:flex;
justify-content: center;
`