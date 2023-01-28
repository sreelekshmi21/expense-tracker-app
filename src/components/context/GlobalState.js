import React, {useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {

    balance: 0,
    transactions:[{
        id:1,
        type: 'credit',
        amount: 0
    }]
}



export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = ({children}) =>{

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addTransaction(transaction){
       dispatch({
           type: 'ADD_TRANSACTION',
           payload: transaction
       })
    }
    return(
        <GlobalContext.Provider value={{
          transactions: state.transactions,
          balance: state.balance,
          addTransaction
        }}>
           {children}
        </GlobalContext.Provider>
    )

}