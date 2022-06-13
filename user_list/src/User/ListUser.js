import React from "react";
import Card from "../UI/Card";

function ListUser({ user }) {
  return (
    <Card>
      <ul>
        {user.map((user, index) => (
          <li key={index}>{`${user.name}(${user.age})`}</li>
        ))}
      </ul>
    </Card>
  );
}

export default ListUser;
