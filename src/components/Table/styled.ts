import styled from "styled-components";

export const Contanier = styled.div`
    width: 100%;
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    padding: 10px;
    border-radius: 10px;
`
export const AreaTable = styled.table`
    width: 100%;
    border-spacing: 15px ;
`
export const Thead = styled.thead`

`
export const Tbody = styled.tbody`

`
type props = {
    align?:string
    width?:string
}
export const Th = styled.th <props>`
    width:${props => props.width ??'auto' };
    text-align: ${props=>props.align};
   
`