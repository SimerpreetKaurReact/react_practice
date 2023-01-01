import React, { useState, useEffect } from "react";

export default function QuestionList() {
  const [questionList, setQuestionList] = useState([]);
  const [submissionList, setSubmissionList] = useState([]);
  const updatedList = [];
  // Write your code here.
  useEffect(() => {
    fetch("https://api.frontendexpert.io/api/fe/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestionList(data);
      });

    fetch("https://api.frontendexpert.io/api/fe/submissions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmissionList(data);
      });
  }, []);
  useEffect(() => {}, [submissionList, questionList]);
  return (
    <>
      {/* Write your code here. */}
      <Category data={updatedList} />
    </>
  );
}
const Category = (data) => {
  console.log(data);
  return (
    <div>
      <h2>{`${data.name} {data.correct}/{data.total}`}</h2>
      {data.questions?.map((question) => (
        <div>
          <div>{question.status}</div>
          <h3>{question.questionId}</h3>
        </div>
      ))}
    </div>
  );
};
