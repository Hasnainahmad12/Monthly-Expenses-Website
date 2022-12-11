import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
//Know Import the Components
import Expenses from './components/Expenses/Expenses';

  //change the name expenses into Dummy Expenses
  const DUMMY_EXPENSES = [
    {
      id : 'e1' ,
      title : 'BMW Car' ,
      price : '4000',
      date : new Date(2022 , 6,10)   
    },

    {
      id : 'e2' ,
      title : 'Toyota' ,
      price : '3400',
      date : new Date(2022 , 6,10)

    },

    {
      id : 'e3' ,
      title : 'Ferrari' ,
      price : '4500',
      date : new Date(2020 , 4, 12)
    },

    {
      id : 'e4' ,
      title : 'corolla' ,
      price : '700',
      date : new Date(2019 , 4, 12)
    },

    {
      id : 'e5' ,
      title : 'corolla' ,
      price : '870',
      date : new Date(2019 , 4, 12)
    },

    {
      id : 'e6' ,
      title : 'BMW' ,
      price : '670',
      date : new Date(2019 , 4, 12)
    },

    {
      id : 'e7' ,
      title : 'Altas' ,
      price : '470',
      date : new Date(2022 , 4, 12)
    },

  ];

  //Dynamic Data (you use useState first you import that in react labrary)
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      
      });
    };


  // return React.createElement(
  //   'div',
  //   {} ,
  //   React.createElement('h2', {} , "Hello React"),
  //   React.createElement(Expense, {items: expenses})

  // );
  
  return (
    <div>
         {/*onAddExpense ki jagah dosra naam use kar sktain hain */}
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>       
    </div>
  )

}

export default App;