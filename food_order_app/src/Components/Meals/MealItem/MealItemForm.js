import React, { useContext } from "react";
import AmountContext from "../../store/AmountContext";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  const { id } = props;
  const { quanityList, onIncrease, onDecrease, onChange } =
    useContext(AmountContext);
  const currentMealItem = quanityList.filter((ele) => ele.id === id);
  console.log(currentMealItem[0].amount, id);

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          name: id,
          onChange: onChange,
          value: currentMealItem[0].amount,
        }}
      />

      <button
        onClick={(e) => onIncrease(e, id)}
        disabled={currentMealItem[0].amount === 6}
      >
        + Add
      </button>
      <button
        onClick={(e) => onDecrease(e, id)}
        disabled={currentMealItem[0].amount === 0}
      >
        - Remove
      </button>
    </form>
  );
}

export default MealItemForm;
