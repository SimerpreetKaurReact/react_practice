import React, { useEffect } from "react";
import {
  Link,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
const dummy_quotes = [
  { id: "q1", author: "simer", text: "learning is fun!" },
  { id: "q2", author: "Maxmilian", text: "learning react is great " },
];
function QuoteDetail() {
  const params = useParams();
  const { quoteId } = params;
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  //console.log(match, params);
  //const quote = dummy_quotes.find((quote) => quote.id == params.quoteId);
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  //   if (!quote) {
  //     return <h1>No quote found</h1>;
  //   }
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId]);

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
  if (!loadedQuote) {
    return <h1>No quote found</h1>;
  }

  return (
    <>
      <h1>QuoteDetail {params.quoteId}</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn-flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
