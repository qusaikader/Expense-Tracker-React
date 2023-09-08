import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const initial_data = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date("2022-03-25"),
    price: 254.58 
  },
  {
    id: 2,
    title: "Playstation 5",
    date: new Date("2021-08-12"),
    price: 300.8 
  },
  {
    id: 3,
    title: "College",
    date: new Date("2021-12-15"),
    price: 1500.8 
  }
];


function App() {

  const [expenses, setExpenses] = useState(initial_data);
  
  const newExpense = (obj) => {
    setExpenses((prevExpenses) => {
      return [obj, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onGetNewData={newExpense}/>
      <Expenses data = {expenses}/>
      <p style={{textAlign: "center"}}>Developed by Qusai Kader</p>
    </div>
  );
};

export default App;
