import React from "react";
import mealData from "../../utils/dummy-meals";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
function AvailableMeals() {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {mealData.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
export default AvailableMeals;
