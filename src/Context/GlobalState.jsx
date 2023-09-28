import { useState, useReducer, useEffect } from "react";
import { createContext,useContext } from "react";
import AppReducer from './AppReducer'

const initalState = {
    transactions: []
}
export const Context = createContext(initalState);

export const useGLobalState = () => {
    const context = useContext(Context)
    if(!context)
    throw new Error("UseGlobalState must be used within a globalstate")
    return context
}

export const GlobalProvider = ({children}) => {

    const [state, dispath] = useReducer(AppReducer, initalState, () => {
        const localData = localStorage.getItem('transactions')
        return localData ? JSON.parse(localData) : initalState
    })
    
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify (state))
    }, [state])
    const addTransaction = (transactions) => {
     dispath({
        type: "ADD_TRANSACTION",
        payload: transactions
     })
    } 

    const deleteTransaction = (id) => {
        dispath({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    } 
    return (
        <Context.Provider 
        value={{transactions: state.transactions,
        addTransaction,
        deleteTransaction
        }}>
            {children}
        </Context.Provider>
    )

}