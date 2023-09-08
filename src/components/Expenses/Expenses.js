import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses ({data}) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = (data) => {
      setFilteredYear(data);
    };
    
    const filteredData =  data.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
      <Card className="expenses">
        <ExpensesFilter onSaveFilter = {filterHandler} selectedYear = {filteredYear}/>
        <ExpensesChart expenses = {filteredData} />
        <ExpensesList item = {filteredData}/>
      </Card>
    );
}

export default Expenses;