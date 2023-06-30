import * as C from './styled';
import { useState } from 'react';
import { categoryType, itemsTypes } from '../../types/types';
import { category } from '../../Data/category';

type props = {
    AddNewItem : (item:itemsTypes) =>void,
    setDate : (date:Date)=>void,
    listItem : itemsTypes[]
}

export const AddItem = ({AddNewItem,setDate,listItem}:props)=>{

    const [newDate,setNewDate] = useState<string>();
    const [newCategory,setNewCategoty] = useState<string>();
    const [title,setTitle] = useState<string>();
    const [value,setValue] = useState<string>();
    const [error,setError] = useState <boolean>(false);

    const newItem = ()=>{
        if(!newDate || !newCategory || !title || !value ){
            setError(true)
            return
        }
        let [year,month,day] = newDate.split('-')
        AddNewItem({
            date:new Date(+year,+month-1,+day),
            category:newCategory,
            title,
            value:+value,
            id:listItem.length-1  
        })
        setDate(new Date(+year,+month-1,+day))
        setTitle('')
        setNewCategoty('')
        setValue('')
        setError(false)
    }
    
    return(
        <C.Contanier>
            <C.InputArea>
                <C.Label>Data</C.Label> 
                <input type="date" 
                onChange={e=>setNewDate(e.target.value)}
                />
                <C.error show = {!newDate && error ? '1':'0'}>Informe uma data</C.error>                                                          
            </C.InputArea>
            <C.InputArea>
                <C.Label>Categoria</C.Label> 
                <select onChange={e=>setNewCategoty(e.target.value)} value={newCategory}>
                    <option>Selecione uma opção</option>
                    {category.length> 0 && category.map((i,k)=>(
                        <option key={k}>{i.title}</option>
                    ))}
                </select>
                <C.error show = {!newCategory && error ? '1':'0'}>Informe uma categoria</C.error>                                                      
            </C.InputArea>
            <C.InputArea>
                <C.Label>Título</C.Label> 
                <input 
                    type="text" 
                    onChange={e=>setTitle(e.target.value)}
                    value={title}
                />
                <C.error show = {!title && error ? '1':'0'}>Informe uma título</C.error>                                                                
            </C.InputArea>
            <C.InputArea>
                <C.Label>Valor</C.Label> 
                    <input type="number" 
                    onChange={e=>setValue(e.target.value)}
                    value={value}
                />
                 <C.error show = {!value && error ? '1':'0'}>Informe uma valor</C.error>                                                      
            </C.InputArea>     
            <C.AreaButton>
               <C.Button onClick={newItem}>Adicionar</C.Button>                                                    
            </C.AreaButton>
        </C.Contanier>
    )
}