import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status == "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const onAddQuoteHandler = (data) => {
    console.log(data);
    sendRequest(data);
    //push allows previous one, replace wont have access to older route
  };
  return (
    <QuoteForm isLoading={status == "pending"} onAddQuote={onAddQuoteHandler} />
  );
}

export default NewQuote;
