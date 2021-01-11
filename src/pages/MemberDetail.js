import React from "react";
import { useSelector } from "react-redux";

const MemberDetail = ({ match }) => {
  const { users } = useSelector((state) => state);

  const user = users.filter(
    (user) => parseInt(user.id) === parseInt(match.params.id)
  )[0];

  return (
    <div>
      <h1>Member Detail</h1>
      <br />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.website}</h1>
    </div>
  );
};

export default MemberDetail;
