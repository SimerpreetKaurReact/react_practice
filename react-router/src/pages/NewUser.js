import React from "react";
import { useParams } from "react-router-dom";

function NewUser() {
  const { userId } = useParams();
  return (
    <section>
      <p>Welcome new user {userId}</p>
    </section>
  );
}

export default NewUser;
