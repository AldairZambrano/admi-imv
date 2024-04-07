import { useState } from "react"
import { useGLobalState } from "../../Context/GlobalState"

export default function TransactionForm () {
    const {addTransaction} = useGLobalState();
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount
        })
       setAmount(0)
       setDescription("")
    }

    return(
        <div>
            <form onSubmit={onSubmit} action="">
                <input className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" 
                type="text" placeholder="Enter a Description" 
                onChange={(e) => setDescription(e.target.value)}
                value={description}/>
                <input 
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full "
                type="number"
                step='0.1'
                placeholder="0.00"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}/>
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                disabled={!description || !amount}>Agregar transacción</button>
            </form>
        </div>
    )
}