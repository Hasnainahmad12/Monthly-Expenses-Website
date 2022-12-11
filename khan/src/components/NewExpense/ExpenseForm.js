import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm =(props) => {

    //in simple js we can write listing in this type (addEventListener('click', () =>{}))
    
    //In React is simple (go to chrome console screen and check out the target > value)
    // const eventChangeHandler = (events) => {
    //     console.log(events.target.value);
    // };

    //Working with multiple State
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    //Using only one state
     // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const eventChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     //this is spread operator default JS operator(...UserInput)
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    };

    const eventChangeAmount = (event) =>{
        setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //     })
    };

    const eventChangeDate = (event) =>{
        setEnteredDate(event.target.value);
    //    setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    //     })

    };

    const submitHandler = (event) =>{
        //preventDafault this is JS behavior, this is request being send. Sense the request not send the will not relaod the page.
        event.preventDafault();

        const expenseData = {
            Title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate),
        };
        
        props.onSaveExpenseData(expenseData);
     //   console.log(expenseData);
        
        //Two way binding
        enteredTitle('');
        enteredAmount('');
        enteredDate('');
    };


    return ( 
     <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={eventChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={eventChangeAmount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2018-6-17' max='2022-9-12' value={enteredDate} onChange={eventChangeDate}/>
            </div>
        </div> 

        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>

    ) 
};

export default ExpenseForm;