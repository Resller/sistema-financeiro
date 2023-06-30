import styled from "styled-components";

export const Tr = styled.tr`

`
type props = {
    bg?:string,
    color?:string,
    align?:string,
    max?:string
}
export const Td = styled.td <props>`
    background-color:${props=>props.bg};
    border-radius: 5px;
    color:${props=>props.color};
    font-weight: 600;
    text-align: ${props=>props.align};
    padding:2px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width:${props=>props.max};

   
`
export const AreaImg = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    img{
        width:22px;
        object-fit: cover;
    }
    .close{
        &:hover{
            opacity: 0;
        }
    }
    .open{
        margin-left:-22px;
        opacity: 0;
        transform: scaleX(-1);
        &:hover{
            opacity: 1;
        }
    }
`