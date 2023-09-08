import { useState } from "react";

import "./NewExpenseForm.css"

const NewExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formVisibility, setFormVisibility] = useState(false);


    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value);
        }else if(identifier === 'date'){
            setEnteredDate(value);
        }else{
            setEnteredPrice(value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            price : +enteredPrice,
            date : new  Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }

    const displayForm = () => {
        setFormVisibility(true);
    }

    const closeForm = () => {
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
        setFormVisibility(false);
    }

    return( 
    (formVisibility) ?
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value = {enteredTitle} onChange={(event) => inputChangeHandler('title',event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Price</label>
                <input type="number" value = {enteredPrice} min="0.1" step="0.1" onChange={(event) => inputChangeHandler('price',event.target.value)}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={(event) => inputChangeHandler('date',event.target.value)}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button onClick={closeForm}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>: <button onClick={displayForm}>Add New Expense</button>
    );
}

export default NewExpenseForm;