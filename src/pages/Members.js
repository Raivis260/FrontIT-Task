import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import UserList from "../components/UserList";
import UserModal from "../components/UserModal";
import { loadUsers } from "../store/users/usersActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "../components/EditUserModal";
const Members = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const { users, isLoading } = useSelector((state) => state);

  const [usersList, setUsersList] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    setUsersList(users);
  }, [isLoading]);

  let filter = usersList.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search.toLowerCase()) ||
      user.email.includes(search.toLowerCase()) ||
      user.website.includes(search.toLowerCase())
    );
  });

  const toggleAddModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleEditModal = () => {
    setEditOpen(!isEditOpen);
  };

  if (!isLoading) {
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
          <button className="add-button" onClick={toggleAddModal}>
            Add New
          </button>
        </div>
        <UserList
          filter={filter}
          usersList={usersList}
          setUsersList={setUsersList}
          toggleEditModal={toggleEditModal}
          setSelectedUser={setSelectedUser}
        />
        {isOpen && (
          <UserModal
            toggleAddModal={toggleAddModal}
            setUsersList={setUsersList}
          />
        )}
        {isEditOpen && (
          <EditUserModal
            toggleEditModal={toggleEditModal}
            setUsersList={setUsersList}
            selectedUser={selectedUser}
            usersList={usersList}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p style={{ textAlign: "center", fontSize: "5rem" }}>Loading...</p>
      </div>
    );
  }
};

export default Members;
