//we can use the events so we can use the useState predefinied function in react Library
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    //dynamic data 
    // const expenseDate = new Date(2022, 6, 9);
    // const expensetitle = 'Car Insuance';
    // const expensePrice = 4000;

    // const Handler = () =>{
    //     console.log('clicked!!!!')
    // }
    
    //in this array the first value itself and the 2nd value is updated 
//    const [title , setTitle] = useState(props.title);

//     const Handler = () =>{
//         setTitle('Updated!');
//         console.log(title);
//     }


    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate  date={props.date}/>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.price}</div>
            </div>
            {/*In regular javascript we can write this type of events e.g: document.getElementById('root').addEventListner() */}
            {/*Events in React js (first Pattern)*/}
           {/* <button onClick={() => {console.log('Clicked!')}}>Change Title</button> */}
            {/*<button onClick={Handler}>Change Title</button> */}
        </Card>
        </li>
        )
}

export default ExpenseItem;
