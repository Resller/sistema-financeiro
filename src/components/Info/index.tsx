import { helpers } from '../../helpers/helpers';
import * as C from './styled';
type props = {
    date:Date,
    setDate:(date:Date)=>void,
    expenses:number,
    revenue :number

}
export const Info = ({date,setDate,revenue, expenses}:props)=>{
    const previous = ()=>{
        let newDate = new Date (date.getFullYear(),date.getMonth()-1,1)
        setDate(newDate)
    }
    const next = ()=>{
        let newDate = new Date (date.getFullYear(),date.getMonth()+1,1)
        setDate(newDate)
    }
    return(
        <C.Contanier>
            <C.AreaMonth>
                <C.AreaArrow onClick={previous}>⬅️</C.AreaArrow>
                <C.Month>{helpers.formtMonth(date)}</C.Month>
                <C.AreaArrow onClick={next}>➡️</C.AreaArrow>
            </C.AreaMonth>
            <C.AreaBalance>
                <C.InfoArea>
                   <C.Txt>Receita</C.Txt>
                   <C.Value>R$ {revenue.toFixed(2)}</C.Value>
                </C.InfoArea>
                <C.InfoArea>
                   <C.Txt>Despesas</C.Txt>
                   <C.Value>R$ {expenses.toFixed(2)}</C.Value>
                </C.InfoArea>
                <C.InfoArea>
                   <C.Txt>Balanço</C.Txt>
                   <C.Value color={revenue - expenses < 0 ? '#F00':'#006400'}>R$ { (revenue - expenses).toFixed(2) }</C.Value>
                </C.InfoArea>
            </C.AreaBalance>
        </C.Contanier>
    )
}