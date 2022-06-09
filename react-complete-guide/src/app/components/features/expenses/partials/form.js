import { useState } from "react";
import "../../../../assets/css/features/expenses/form.css";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());

  // Combined States in a single variable
  // const [formInput, setFormInput] = useState({
  //   title: '',
  //   amount: 0,
  //   date: new Date().toISOString(),
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
    // console.log('Title: ', title);

    // ******** Below methods is correct but React schedule snapshot and in this scenario, React might be looking at the wrong snapshot
    // setFormInput({
    //   ...formInput,
    //   title: event.target.value,
    // });

    // **********  Below method insures that you are working on the latest snapshot
    // setFormInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setFormInput({
    //   ...formInput,
    //   amount: event.target.value,
    // });

    // setFormInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setFormInput({
    //   ...formInput,
    //   date: event.target.value.toISOString(),
    // });

    // setFormInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      id: `e${Math.floor(Math.random() * 100).toString()}`,
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    console.log(expense);
    setTitle("");
    setAmount(0);
    setDate(new Date());
    // Sending date to parent function (create.js)
    props.onSave(expense);
    props.onClose();
  };

  return (
    // Use this form for individual states
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onClose}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>

    // Use this form for single state variable
    // <form>
    //   <div className="new-expense__controls">
    //     <div className="new-expense__control">
    //       <label>Title</label>
    //       <input
    //         type="text"
    //         onChange={titleChangeHandler}
    //         name={formInput['title']}
    //       />
    //     </div>
    //     <div className="new-expense__control">
    //       <label>Amount</label>
    //       <input
    //         type="number"
    //         min="0.01"
    //         step="0.01"
    //         onChange={amountChangeHandler}
    //         name={formInput['amount']}
    //       />
    //     </div>
    //     <div className="new-expense__control">
    //       <label>Date</label>
    //       <input
    //         type="date"
    //         min="2019-01-01"
    //         max="2022-12-31"
    //         onChange={dateChangeHandler}
    //         name={formInput['date']}
    //       />
    //     </div>
    //   </div>
    //   <div className="new-expense__actions">
    //     <button type="submit">Add Expense</button>
    //   </div>
    // </form>
  );
};

export default Form;
