import React from "react";

function Navigation({ loggedIn, setLoggedIn }) {
  const handleOnClick = () => {
    setLoggedIn(false);
  };

  return (
    <React.Fragment>
      {loggedIn ? (
        <>
          <p className="App-secondary">Users</p>
          <p>Admin</p>
          <button onClick={handleOnClick}>Logout</button>
        </>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}

export default Navigation;
