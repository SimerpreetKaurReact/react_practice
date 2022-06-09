import { useState } from "react";
import "../../../../assets/css/features/expenses/filter.css";

const ExpensesFilter = (props) => {
  const [year, setYear] = useState("2022");

  const setYearHandler = (event) => {
    setYear(event.target.value);
    return props.onChangeFilter({
      year: event.target.value,
    });
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select name="year" onChange={setYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
