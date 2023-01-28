import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

const TransactionsList = () => {
    const {transactions} = useContext(GlobalContext)

    
         

    console.log('transsssssss',transactions)

    return (
        
            <ul className="list-group">
              {transactions.map((transaction => (
                  <li key={transaction.id} 
className={`list-group-item ${transaction.type === 'credit' ? 'greenColor' : 'redColor'}`}>
                     <h5>{transaction.type}</h5> 
                    
                      <span>
                        <h6>  
                      {(transaction.amount < 0) ? (transaction.amount * -1)
                                               : (transaction.amount)
                      }</h6>
                      </span>
                    <button type="button"
                            className="btn btn-secondary"
                    >Delete</button> 
                      
                  </li>    
              )))}
        
           </ul>
        
    )
}
export default TransactionsList
