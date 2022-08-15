import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NewQuote from "./NewQuote";
const dummy_quotes = [
  { id: "q1", author: "simer", text: "learning is fun!" },
  { id: "q2", author: "Maxmilian", text: "learning react is great " },
];
function Allquotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status == "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focussed">{error}</p>;
  }
  if (status == "completed" && !loadedQuotes && loadedQuotes.length === 0) {
    return <NewQuote />;
  }
  return <QuoteList quotes={loadedQuotes} />;
}

export default Allquotes;
