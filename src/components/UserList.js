import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEdit,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { sortName } from "../sortMembers";
const UserList = ({
  usersList,
  setUsersList,
  filter,
  toggleEditModal,
  setSelectedUser,
}) => {
  const { isLoading } = useSelector((state) => state);

  const history = useHistory();
  const [isSorted, setIsSorted] = useState(false);

  const userEditHandler = (e, userId) => {
    e.stopPropagation();
    toggleEditModal();
    let index;
    usersList.map((user) => {
      if (user.id === userId) index = usersList.indexOf(user);
    });

    return setSelectedUser({ ...usersList[index] });
  };

  const handleRowClick = (userId) => {
    history.push(`/user/${userId}`);
  };

  const userRemoveHandler = (event, userId) => {
    let index;
    usersList.map((user) => {
      if (user.id === userId) index = usersList.indexOf(user);
    });
    if (index > -1) {
      usersList.splice(index, 1);
    }
    event.stopPropagation();
    return setUsersList([...usersList]);
  };

  const sortByName = () => {
    if (isSorted) {
      setIsSorted(!isSorted);
      const sortedList = sortName([...usersList], isSorted);
      return setUsersList(sortedList);
    } else {
      setIsSorted(!isSorted);
      const sortedList = sortName([...usersList], isSorted);
      return setUsersList(sortedList);
    }
  };

  return (
    <>
      {!isLoading && (
        <div className="users-container">
          <table>
            <thead>
              <tr>
                <th onClick={sortByName} style={{ cursor: "pointer" }}>
                  Name
                  <FontAwesomeIcon icon={isSorted ? faSortDown : faSortUp} />
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filter.map((user) => {
                return (
                  <tr
                    key={user.id}
                    onClick={() => handleRowClick(user.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        size="2x"
                        style={{
                          margin: "0rem 0.5rem",
                          color: "grey",
                          cursor: "pointer",
                        }}
                        onClick={(e) => userEditHandler(e, user.id)}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        size="2x"
                        style={{
                          margin: "0rem 0.5rem",
                          color: "#ffa600",
                          cursor: "pointer",
                        }}
                        onClick={(e) => userRemoveHandler(e, user.id)}
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
