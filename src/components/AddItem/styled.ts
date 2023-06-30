import styled from "styled-components";



export const Contanier = styled.div`
    width: 100%;
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    padding: 20px 20px 10px 20px;
    display: flex;
    border-radius: 10px;
    gap:20px
`
export const InputArea = styled.div`
    flex:1;
    display: flex;
    flex-direction: column ;
    gap:5px;
    
    input,select{
        font-size: 14px;
        padding:3px 5px;
        border-radius: 5px;
        border:  solid 1px #CCC;
        outline: none;
    }
`
export const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
`
export const AreaButton = styled.div`
    display: flex;
    align-items: center;
    flex:1;

`
export const Button = styled.button`
    flex:1;
    font-size: 14px;
    font-weight: 600;
    padding:3px 5px;
    border-radius: 5px;
    border:  solid 1px #CCC;
    outline: none;
    background-color:#137FA9;
    cursor: pointer;
    color:#FFF;
    transition: all ease .3;

    &:hover{
        opacity:0.7;
    }

`

export const error = styled.span<{show?:string}> `
    width: 100%;
    padding: 2px;
    border-radius: 2px;
    font-size: 12px;
    color: #FFF;
    background-color: #F00;
    margin-top: -4px;
    opacity:${props =>props.show};
    transition: all ease .3;
`