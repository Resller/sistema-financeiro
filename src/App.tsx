import * as C from './styled'

import { AddItem } from './components/AddItem';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Table } from './components/Table';


import { useEffect, useState } from 'react';
import { itemsTypes } from './types/types';
import { items } from './Data/items';
import { helpers } from './helpers/helpers';

function App() {
  const [listItem, setListItem] = useState<itemsTypes[]>(items)
  const [listMonth, setListMonth] = useState<itemsTypes[]>([])
  const [date,setDate] = useState<Date>(new Date())
  const [revenue,setRevenue] = useState <number>(0);
  const [expenses,setExpenses] = useState <number>(0);
  
  useEffect(()=>{
    const list = helpers.getList('listFinance');
    if(list){
      setListItem(list)
    }
  },[])
 
  useEffect(()=>{
    let newdate = helpers.getDate(date);
    let [year,month] = newdate.split('-');
    let newListMonth = listItem.filter((item)=>new Date(item.date).getMonth() === +month && new Date(item.date).getFullYear() === +year)
    setListMonth(newListMonth)
    
    if(listItem.length > 0){
      localStorage.setItem('listFinance',JSON.stringify(listItem))
    }
  },[listItem,listItem.length,date])
  
  useEffect(()=>{
    let [ revenue,expenses] = helpers.getRevenueAndExpenses(listMonth)
    setRevenue(revenue);
    setExpenses(expenses);
  },[listMonth])
  
  const AddNewItem = (item:itemsTypes)=>{
    let newList = [...listItem];
    newList.push(item)
    setListItem(newList)
  }
  const deleteItem = (key:number)=>{
    const newlist = listItem.filter(i=> i.id !== key)
    setListItem(newlist)
  
    if(listItem.length === 1){
      localStorage.removeItem('listFinance')
    }
  }

  return (
    <C.Contanier>
      <Header/>
      <C.Body>
        <Info
        date={date}
        setDate={setDate}
        revenue ={revenue}
        expenses ={expenses}
        />
        <AddItem
          AddNewItem ={AddNewItem}
          setDate={setDate}
          listItem ={listItem}
        />
        <Table
          data = {listMonth}
          deleteItem ={deleteItem}
        />
      </C.Body>
    </C.Contanier>
  )
}

export default App
