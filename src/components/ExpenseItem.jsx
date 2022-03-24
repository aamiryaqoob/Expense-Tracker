import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
// ExpenseItem data
const ExpenseItem = (props) => {
  
  const clickHandler = (props) => {
    console.log("Clicked!!");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </div>
    
  );
};

export default ExpenseItem;
