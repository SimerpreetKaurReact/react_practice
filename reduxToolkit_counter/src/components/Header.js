import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  const showLogout = (
    <>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
