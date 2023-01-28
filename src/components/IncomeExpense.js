import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map((transaction) => transaction.amount)

    
    const totalIncome = amounts.filter((value) => value > 0)
                                    .reduce((acc,currVal) => acc += currVal,0)
                                    .toFixed(2)
    
    const totalExpense = (amounts.filter((value) => value < 0)
                                    .reduce((acc,currVal) => acc += currVal,0)* -1)
                                    .toFixed(2)
    console.log('incexp===============',totalIncome,totalExpense)



    
    return (
        <>
              <div className="col-sm-12 col-md-6 alert alert-success">
                 <h2>Income</h2>
                 <h3>$ {totalIncome}</h3>
              </div>
              <div className="col-sm-12 col-md-6 alert alert-primary">
                 <h2>Expense</h2>
                 <h3>$ {totalExpense}</h3>
              </div>
            
        </>
    )
}
export default IncomeExpense