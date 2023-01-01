import React, { useState, useEffect } from "react";

import data from "./data";
export default function Quiz() {
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const nextSelection = false;
  // Write your code here.
  useEffect(() => {
    console.log(data);
    setQuestionList(data);
    setCurrentQuestion(0);
    //console.log(currentQuestion ,currentQuestion!=null,questionList[currentQuestion])
  });
  const handleBack = () => {
    setCurrentQuestion((current) => current - 1);
  };
  const handleNext = () => {
    setCurrentQuestion((current) => current + 1);
  };
  return (
    <>
      {currentQuestion != null ? (
        <CurrentQuestion questionList={questionList[currentQuestion]} />
      ) : (
        <h1>Loading...</h1>
      )}
      <button
        disabled={currentQuestion == 0 ? true : false}
        onClick={handleBack}
      >
        Back
      </button>
      <button
        disabled={
          currentQuestion == questionList.length - 1 || currentQuestion > 0
            ? true
            : false
        }
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
}
const CurrentQuestion = ({ questionList }) => {
  const [status, setStatus] = useState("");
  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value == questionList.answers[questionList.correctAnswer]) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  };
  return (
    <>
      <h1>{questionList.question}</h1>
      <ul>
        {questionList.answers.map((answer, index) => (
          <h2
            onClick={handleClick}
            className={`answer ${status.trim().length > 0 ? status : ""}`}
            key={index}
          >
            {answer}
          </h2>
        ))}
      </ul>
    </>
  );
};
