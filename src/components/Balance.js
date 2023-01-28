import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map((transaction) => transaction.amount)

    const total = amounts.reduce((acc,currval) => acc += currval,0).toFixed(2)


    

    console.log('tot---------',total)

    return (
        <div className="alert alert-secondary">
            <h2>Balance</h2>
            <h3>$ {total}</h3>
        </div>
    )
}
export default Balance
