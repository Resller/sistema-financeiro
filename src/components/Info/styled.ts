import styled from "styled-components";

export const Contanier = styled.div`
    width: 100%;
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top:-50px;
`

export const AreaMonth =styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content:  space-around;
`
export const AreaArrow =styled.div`
    font-size:22px;
    cursor: pointer;
`
export const Month =styled.div`
    font-size:20px;
    font-weight: 700;
`

export const AreaBalance =styled.div`
    flex:2;
    display: flex;
    align-items: center;
    justify-content:  space-around;
`

export const InfoArea =styled.div`
   
`

export const Txt = styled.div`
   padding-bottom: 3px;
   font-size:18px;
   color:#999;
   font-weight: 700;
   
`
export const Value =styled.div<{color?:string}>`
    font-size:18px;
    font-weight: 700;
    color:${props=>props.color}
`
