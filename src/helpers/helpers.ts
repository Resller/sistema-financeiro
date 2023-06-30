import { itemsTypes } from "../types/types";

export const helpers = {
    getDate : (date:Date)=>{
        let newdate = new Date(date)
        return `${newdate.getFullYear()}-${newdate.getMonth()}`
    },

    formtDate : (date:Date):string=>{
       
       let newDate = new Date (date);
       let day = newDate.getDate() ;
       let month = newDate.getMonth()+1;
       let year = newDate.getFullYear()

       let newDay = day > 10 ? day : '0'+ day ;
       let newMonth = month > 10 ? month : '0'+ month ;

       return `${newDay}/${newMonth}/${year}`
    },
    formtMonth : (date:Date):string =>{
        let monthName = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        let month = date.getMonth()
        let year = date.getFullYear()
        
        return `${monthName[month]} ${year}`
    },
    getRevenueAndExpenses : (list:itemsTypes[])=>{
        let revenue = 0
        let expenses = 0
        for (let i = 0 ; i < list.length;i++){
            if(list[i].category.toLowerCase() === 'renda'){
                revenue += list[i].value
            }else{
                expenses += list[i].value
            }   
        }
        return [ revenue,expenses]
    },
    getList :(key:string)=>{
        const storage = localStorage.getItem(key)
        return storage ? JSON.parse(storage):false
    }

}