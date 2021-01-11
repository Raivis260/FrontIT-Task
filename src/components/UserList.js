import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { sortName } from "../sortMembers";
const UserList = ({ filteredUsers, setUsersList }) => {
  const { isLoading } = useSelector((state) => state);

  const userRemoveHandler = (userId) => {
    let index;
    filteredUsers.map((user) => {
      if (user.id === userId) index = filteredUsers.indexOf(user);
    });
    if (index > -1) {
      filteredUsers.splice(index, 1);
    }

    setUsersList(filteredUsers);
  };

  const sortByName = () => {
    setUsersList(sortName(filteredUsers));
  };

  return (
    <>
      {!isLoading && (
        <div className="users-container">
          <table>
            <thead>
              <tr>
                <th onClick={sortByName} style={{ cursor: "pointer" }}>
                  Name <FontAwesomeIcon icon={faSortDown} />
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                return (
                  <tr key={user.id}>
                    <Link
                      to={`/user/${user.id}`}
                      style={{
                        textDecoration: "none",
                        color: "#000",
                      }}
                    >
                      <td>{user.name}</td>
                    </Link>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        size="2x"
                        style={{
                          margin: "0rem 0.5rem",
                          color: "grey",
                          cursor: "pointer",
                        }}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        size="2x"
                        style={{
                          margin: "0rem 0.5rem",
                          color: "#ffa600",
                          cursor: "pointer",
                        }}
                        onClick={() => userRemoveHandler(user.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserList;
