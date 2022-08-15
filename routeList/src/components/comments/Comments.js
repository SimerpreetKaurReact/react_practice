import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment, getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest,
    status,
    data: LoadedComments,
    error,
  } = useHttp(getAllComments);

  const params = useParams();
  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);
  const onAddedComment = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  let comments;
  if (status === "pending ") {
    comments = <LoadingSpinner></LoadingSpinner>;
  }
  if (status === "completed" && LoadedComments?.length > 0) {
    comments = <CommentsList comments={LoadedComments} />;
  }
  if (status === "completed" && LoadedComments?.length == 0) {
    comments = <p>no comments added</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={onAddedComment}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
