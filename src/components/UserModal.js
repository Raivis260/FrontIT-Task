import React, { useState } from "react";

const UserModal = ({ toggleModal, setUsersList }) => {
  const addUser = (newUser) => {
    setUsersList((list) => [...list, newUser]);
  };

  const [user, setUser] = useState({
    name: null,
    email: null,
    phone: null,
    website: null,
  });

  const handleInputChange = (e) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    if (user.name && user.email && user.phone && user.website) {
      e.preventDefault();
      toggleModal();
      addUser(user);
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="add-user-modal-bg">
      <div className="add-user-modal">
        <h2>Add User</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone: </label>
            <input type="text" name="phone" onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="website">Website: </label>
            <input type="text" name="website" onChange={handleInputChange} />
          </div>
          <button type="submit">Create</button>
          <button onClick={toggleModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
