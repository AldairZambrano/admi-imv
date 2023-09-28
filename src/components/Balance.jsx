import { useGLobalState } from "../Context/GlobalState"

export default function Balance () {
    const {transactions} = useGLobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return(
        <div className="flex justufy-btween items-center my-2">
            <h4 className="text-slate-400">Your Balance</h4>
            <h1 className="text-2x1 font-bold">${total}</h1>
        </div>
    )
}