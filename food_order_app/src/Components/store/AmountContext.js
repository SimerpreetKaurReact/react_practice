import React, { useEffect, useState } from "react";
import DUMMY_MEALS from "../../utils/dummy-meals";
const AmountContext = React.createContext({
  quanityList: [],
  onIncrease: () => {},
  onDecrease: () => {},
  onChange: () => {},
  totalAmount: 0,
});
export const AmountContextProvider = (props) => {
  const [quanityList, setQuantityList] = useState(
    DUMMY_MEALS.map((meal) => ({ amount: 1, id: meal.id }))
  );
  const [totalAmount, setTotalAmount] = useState(
    DUMMY_MEALS.reduce((acc, meal) => {
      for (const ele of quanityList) {
        if (ele.id === meal.id) {
          acc = acc + ele.amount * meal.price;
        }
      }
      return acc;
    }, 0)
  );
  useEffect(() => {
    setTotalAmount(
      DUMMY_MEALS.reduce((acc, meal) => {
        for (const ele of quanityList) {
          if (ele.id === meal.id) {
            acc = acc + ele.amount * meal.price;
          }
        }
        return acc;
      }, 0)
    );
  }, [quanityList]);

  const handleAdd = (e, id) => {
    console.log("inside add", id);

    e.preventDefault();

    setQuantityList((prevState) => {
      return prevState.map((ele) => {
        if (ele.id === id) {
          return { id: ele.id, amount: parseInt(ele.amount) + 1 };
        }
        return ele;
      });
    });
  };
  const handleSubtract = (e, id) => {
    e.preventDefault();
    console.log("inside subtract", id);
    setQuantityList((prevState) => {
      return prevState.map((ele) => {
        if (ele.id === id) {
          return { id: ele.id, amount: parseInt(ele.amount) - 1 };
        }
        return ele;
      });
    });
  };
  const handleChange = (e) => {
    console.log("inside ahndlechange", e.target.name, e.target.value);
    setQuantityList((prevState) => {
      return prevState.map((ele) => {
        if (ele.id === e.target.name) {
          return { id: ele.id, amount: e.target.value };
        }
        return ele;
      });
    });
  };
  return (
    <AmountContext.Provider
      value={{
        quanityList: quanityList,
        onIncrease: handleAdd,
        onDecrease: handleSubtract,
        onChange: handleChange,
        totalAmount,
      }}
    >
      {props.children}
    </AmountContext.Provider>
  );
};
export default AmountContext;
