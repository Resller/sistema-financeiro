import { helpers } from '../../helpers/helpers';
import { itemsTypes } from '../../types/types';
import * as C from './styled';

import deleteClose from '../../img/76172-200.png';
import deleteOpen from '../../img/trashcan_Open.png';

type props = {
    data :itemsTypes,
    deleteItem : (key:number)=>void,
}

export const Item = ({data,deleteItem}:props)=>{
    return(
        <C.Tr>
            <C.Td align='left'>{helpers.formtDate(data.date)}</C.Td>
            <C.Td align ='center' color = '#FFF' bg = {data.category === 'Dispesa'? '#F00':'#006400'}>{data.category}</C.Td>
            <C.Td max= '350px'  align ='left'>{data.title}</C.Td>
            <C.Td max= '100px' align ='left'color ={data.category === 'Dispesa'? '#F00':'#006400'}>R$ {data.value.toFixed(2)}</C.Td>
            <C.Td>
               <C.AreaImg onClick={()=>deleteItem(data.id)}>
                    <img className='close' src={deleteClose} alt="" />
                    <img className='open' src={deleteOpen} alt="" />
               </C.AreaImg>
            </C.Td>
        </C.Tr>
    )
}