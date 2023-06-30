import { itemsTypes } from '../../types/types';
import { Item } from '../Item';
import * as C from './styled';

type props = {
    data : itemsTypes[]
    deleteItem : (key:number)=>void
}

export const Table = ({data, deleteItem}:props)=>{
    return(
        <C.Contanier>
            <C.AreaTable>
                <thead>
                    <tr>
                        <C.Th align='left' width='150px'>Data</C.Th>
                        <C.Th align='center' width='150px'>Categoria</C.Th>
                        <C.Th align='left'>Título</C.Th>
                        <C.Th align='left' width='100px'>Valor</C.Th>
                        <C.Th width='50px'>Delete</C.Th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 &&
                        data.map((i,k)=>(
                            <Item 
                                key={k}
                                data={i}
                                deleteItem ={ deleteItem}
                            />
                        ))
                    }
                </tbody>
            </C.AreaTable>
        </C.Contanier>
    )
}
