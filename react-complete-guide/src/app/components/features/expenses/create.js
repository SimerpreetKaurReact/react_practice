import { useEffect, useState } from "react";
import "../../../assets/css/features/expenses/create.css";
import ExpenseForm from "./partials/form";

const onClickExpense = (listener) => {};
// let pushExpense;

const Create = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const { pushExpense } = props;
  const newExpenseHandler = (data) => {
    let newdata = {
      ...data,
      id: `e${Math.floor(Math.random() * 10).toString()}`,
    };
    console.log("data", newdata);
    props.pushExpense(newdata);
  };
  // useEffect(() => {
  //   newExpenseHandler();
  // });
  return (
    <div className="new-expense">
      <ToggleFormDom
        formToggle={formToggle}
        setFormToggle={setFormToggle}
        newExpenseHandler={newExpenseHandler}
      />
    </div>
  );
};

const ToggleFormDom = ({ formToggle, setFormToggle, newExpenseHandler }) => {
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
        <ExpenseForm onClose={toggleHandler} onSave={newExpenseHandler} />
      )}
    </div>
  );
};

export default Create;
//lift state up for communicatiing between sibling components
