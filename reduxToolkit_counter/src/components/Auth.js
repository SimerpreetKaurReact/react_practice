import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  const showWhenLoggedIn = (
    <>
      <p>"welcome back"</p>
    </>
  );
  const showForm = (
    <form onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
  return (
    <main className={classes.auth}>
      <section>{isAuthenticated ? showWhenLoggedIn : showForm}</section>
    </main>
  );
};

export default Auth;
