import react from "react";
import './NewExpense.css';
import expenseForm from "./ExpenseForm";
// This is input function
const newExpense = () => {

    return
        <div className="new-expense">
        <expenseForm />
        </div>

};
// newexpense end

export default newExpense;