import React from "react";
import { Route, useParams } from "react-router-dom";
import NewUser from "./NewUser";

function Welcome() {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path={`/welcome/new-user/:userId`}>
        <NewUser />
      </Route>
    </section>
  );
}

export default Welcome;
