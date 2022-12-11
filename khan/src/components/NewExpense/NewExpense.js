import React, {useState} from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    //Assignment Work 4
    const [isEditing, setIsEditing] = useState(false);
    
    //child to parent Component communication
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);    
    };

    
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

    return (
        <div className="new-expense">
             {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
           {/*<ExpenseForm  onSaveExpenseData={onSaveExpenseData}/> */} 
        </div>
    )
};

export default NewExpense;