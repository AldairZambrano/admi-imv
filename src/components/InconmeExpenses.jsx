import { useGLobalState } from "../Context/GlobalState"

export default function InconmeExpenses () {
    const {transactions} = useGLobalState()
    
    const amounts = transactions.map((transaction) => transaction.amount)


    const income = amounts
                            .filter(item => item > 0 )
                            .reduce((acc, item) => (acc += item), 0)
                            .toFixed(2)

    const expense = (
        amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1 )
        .toFixed(2)
        ;return(
        <>
        <div className="flex justify-between my-2">
            <h4>
                Ingresos o ventas
            </h4>
            <p>
                {income}
            </p>
        </div>   
        <div className="flex justify-between my-2"> 
            <h4>Gastos</h4>
            <h4>{expense}</h4>
        </div>
        </>
    )
}