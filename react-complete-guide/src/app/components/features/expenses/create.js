import { useEffect, useState } from "react";
import "../../../assets/css/features/expenses/create.css";
import ExpenseForm from "./partials/form";

const onClickExpense = (listener) => {};
// let pushExpense;

const Create = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const { pushExpense } = props;
  useEffect(() => {
    newExpenseHandler()
  })
  return (
    <div className="new-expense">
      <ToggleFormDom formToggle={formToggle} setFormToggle={setFormToggle} />
    </div>
  );
};
const newExpenseHandler = (data) => {
  data = { ...data, id: `e${Math.floor(Math.random() * 10).toString()}` };
  //props.pushExpense(data);
};

const ToggleFormDom = ({ formToggle, setFormToggle }) => {
  const toggleHandler = (event) => {
    console.log("Form Toggle: ", formToggle);
    setFormToggle((prevState) => !prevState);
  };
  console.log(formToggle);
  return (
    <div>
      {formToggle ? (
        <button onClick={toggleHandler}> Add New Expense </button>
      ) : (
        <ExpenseForm OnClose={toggleHandler} onSave={newExpenseHandler} />
      )}
    </div>
  );
};

export default Create;
