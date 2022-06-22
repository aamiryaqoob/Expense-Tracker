import react, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = (props) => {
    setTitle('Updated!!')
    // console.log("Clicked");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </div>
    
  );
};

export default ExpenseItem;
