import React, { useContext } from "react";
import AuthContext from "../store/auth-context";

function Navigation() {
  const ct = useContext(AuthContext);
  const handleOnClick = () => {
    ct.onLogOut();
  };

  return (
    <React.Fragment>
      {ct.loggedIn ? (
        <>
          {console.log(ct.loggedIn)}
          <p className="App-secondary">Users</p>
          <p>Admin</p>
          <button onClick={handleOnClick}>Logout</button>
        </>
      ) : (
        <>{console.log(ct.loggedIn)}</>
      )}
    </React.Fragment>
  );
}

export default Navigation;
//writ UT for your module and test thouroughly
//E@E release managemnet
//Project Artifacts that can be used for the Knowledge Management Repository and kept live for either Handover or Take over?
