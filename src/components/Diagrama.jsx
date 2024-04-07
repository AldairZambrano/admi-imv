import {VictoryPie, VictoryLabel} from 'victory'
import { useGLobalState } from '../Context/GlobalState'
import {BsPieChartFill} from 'react-icons/bs'
export default function Diagrama () {
    const {transactions} = useGLobalState()

    const totalIcome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)

    const totalExpense = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0)* -1;
    
    const totalExpensePorcentage = Math.round((totalExpense / totalIcome) * 100)
    
    const totalIcomePorcentage = 100 - (totalExpensePorcentage)
    
    if(totalIcome == 0 && totalExpense === 0) {
        return (
            <div className="bg-zinc-900 p-4 my-2">
                <div className="h-full flex items-center justify-center w-full flex-col">
                <BsPieChartFill className="text-9xl" />
                <h1 className="text-3xl font-bold my-2">No hay datos</h1>
                </div>
            </div>
        );
    }
    return(
        <div className='bg-zinc-950'>
        <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
        {
            x:"Gastos", y: totalExpensePorcentage
        },
        {
            x:"Ingresos", y: totalIcomePorcentage
        },
        ]}
        animate={{duration:2000,}}
        labels={({datum})=> datum.y}
        labelComponent={
        <VictoryLabel 
        angle={45} 
        style={{
            fill: "white",
            }}>
        </VictoryLabel>}>
        </VictoryPie>
        </div>
    )
}