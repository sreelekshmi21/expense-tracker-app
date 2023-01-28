import React, {useContext, useState} from 'react'
import TransactionsList from './TransactionsList'
import { GlobalContext } from './context/GlobalState'

const AddTransaction = () => {

    const [type,setType] = useState('')

    const [amount, setAmount] = useState(0)

    const {addTransaction, transactions} = useContext(GlobalContext)

    const handleSubmit = (e) =>{

        e.preventDefault()
        console.log('in submit========')
        
        const newTransaction = {
            id: transactions.length + 1,
            type: type,
            amount: (type === 'debit') ? -amount : +amount
        }

        console.log('in tr============',newTransaction)
     addTransaction(newTransaction)

     setType('')

     setAmount('')

    }
    
    return (
        
            <form onSubmit={handleSubmit}>
            
                <div className="row">
                   <div className="form-group">
                    <select className="form-select" 
                          name="type"
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                    >
                  <option value="" selected>Select Type</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                  
                  </select>

                    </div>
                    <div className="form-group">
                    <label>Amount</label>
                 <input type="number"
                        name="amount" 
                        required
                        value={amount}
                        className="form-control" 
                        onChange={(e) => setAmount(e.target.value)}
                        />
                

                    </div>   
                    <div className="form-btn text-center">
                    <button type="submit" 
                        className="btn btn-primary">
                    Add Transaction</button>
                    </div>




                 </div>
                
              
            </form>
        
    )
}
export default AddTransaction
