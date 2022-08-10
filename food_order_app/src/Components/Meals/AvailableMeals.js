import React, { useEffect } from "react";
import { useState } from "react";
import mealData from "../../utils/dummy-meals";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
function AvailableMeals() {
  const [fetchedMealData, setFetchedMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://mealapp-f83a3-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      let newData = [];
      // let newData = Object.values(data).map((ele, index) => {
      //   return {
      //     id: `m${index + 1}`,
      //     ...ele,
      //   };
      // });
      for (const key in responseData) {
        newData.push({
          id: key,
          ...responseData[key],
        });
      }
      setFetchedMealData(newData);
      setIsLoading(false);
      console.log(newData);
    };
    // fetch("https://mealapp-f83a3-default-rtdb.firebaseio.com/meals")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     let newData = [];
    //     // let newData = Object.values(data).map((ele, index) => {
    //     //   return {
    //     //     id: `m${index + 1}`,
    //     //     ...ele,
    //     //   };
    //     // });
    //     for (const key in data) {
    //       newData.push({
    //         id: key,
    //         ...data[key],
    //       });
    //     }

    //     setFetchedMealData(newData);
    //     setIsLoading(false);
    //     console.log(newData);
    //   })
    // .catch((err) => {
    //   setIsLoading(false);
    //   setHttpError(err.message);
    // });
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);
  if (isLoading) {
    return (
      <div>
        {" "}
        <p>loading..</p>
      </div>
    );
  }
  if (httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {fetchedMealData?.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
}
export default AvailableMeals;
