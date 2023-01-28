import React from 'react'
import AddTransaction from './AddTransaction'
import Balance from './Balance'

import IncomeExpense from './IncomeExpense'
import TransactionsList from './TransactionsList'

const Home = () => {

  const username = localStorage.getItem('user')
  return (
    <div className="container">
      <h1 className="mt-3">Home {username}</h1>
        <div className="row mt-3">
            <div className="col-sm">
                 <Balance />
            </div>
        </div>
        <div className="row mt-3">
            
                 <IncomeExpense />
            
        </div>
        <h3>Transaction List</h3>
        <div className="row mt-3">
            <div className="col-sm">
               <TransactionsList />
            </div>
        </div>
        <h3>ADD TRANSACTION</h3>
        
            <div className="row mt-3">
              <div className="col-sm">
                  <AddTransaction />
              </div>
            </div>
        
    </div>
  )
}
export default Home
