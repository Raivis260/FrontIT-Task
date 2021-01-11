import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import UserList from "../components/UserList";
import UserModal from "../components/UserModal";
import { loadUsers } from "../actions/usersActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Members = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state);
  const [usersList, setUsersList] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const filteredUsers = usersList.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search.toLowerCase()) ||
      user.email.includes(search.toLowerCase()) ||
      user.website.includes(search.toLowerCase())
    );
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Nav />
      <div className="members-header">
        <div className="circle"></div>
        <h1>Members</h1>
      </div>
      <div className="members-controls">
        <div className="search-box">
          <input
            className="search-text"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className="add-button" onClick={toggleModal}>
          Add New
        </button>
      </div>
      <UserList
        filteredUsers={filteredUsers}
        usersList={usersList}
        setUsersList={setUsersList}
      />
      {isOpen && (
        <UserModal toggleModal={toggleModal} setUsersList={setUsersList} />
      )}
    </div>
  );
};

export default Members;
