import "./NewExpense.css"
import NewExpenseForm from "./NewExpenseForm";


const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random()
        };
        props.onGetNewData(expenseData);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;