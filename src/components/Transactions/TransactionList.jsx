import { useGLobalState } from "../../Context/GlobalState"
import TransactionItem from "./TransactionItem"
function TransactionList () {
    const {transactions} = useGLobalState()
    
    if(transactions.length === 0){
        return(
            <div className="bg-zinc-900 p-4 my-2">
                <div className="h-full flex items-center justify-center w-full flex-col">
                    <h1 className="text-xl font-bold my-2">
                        There are no Transactions yet
                    </h1>
                </div>
            </div>
        )
    }
    return(
        <div className="bg-zinc-900 p-4">
        <h3 className="text-slate-300 text-xl font-bold my-2 text-center">History</h3>
        <ul >
            {
            transactions.map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction.id}></TransactionItem>
            ))
            }
        </ul>
        </div>
    )
}

export default TransactionList