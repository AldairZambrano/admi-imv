import {GlobalProvider} from './Context/GlobalState'
import Header from './components/Header'
import TransactionForm from './components/Transactions/TransactionForm'
import TransactionList from './components/Transactions/TransactionList'
import Balance from './components/Balance'
import InconmeExpenses from './components/InconmeExpenses'
import Diagrama from './components/Diagrama'
export default function App () {
  return(
    <GlobalProvider>
    <div className="bg-neutral-950 text-white h-screen flex justify-center items-center ">
        <div className='w-5/5 flex justify-center items-center'>
            <div className='bg-neutral-800 p-10 rounded-md w-full'>
              <Header></Header>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                    <div className='flex-1'>
                        <InconmeExpenses></InconmeExpenses>
                        <Balance></Balance>
                        <TransactionForm></TransactionForm>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <Diagrama></Diagrama>
                        <TransactionList></TransactionList>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </GlobalProvider>
  )
}