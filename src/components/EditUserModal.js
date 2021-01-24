import React, { useState } from "react";

function EditUserModal({
  toggleEditModal,
  selectedUser,
  usersList,
  setUsersList,
}) {
  const [user, setUser] = useState({
    id: selectedUser.id,
    name: selectedUser.name,
    email: selectedUser.email,
    phone: selectedUser.phone,
    website: selectedUser.website,
  });

  const handleInputChange = (e) => {
    return setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    if (user.name && user.email && user.phone && user.website) {
      e.preventDefault();
      toggleEditModal();
      let index;
      usersList.map((userInArray) => {
        if (userInArray.id === user.id) {
          index = usersList.indexOf(userInArray);
          let newArray = [...usersList];
          newArray[index] = {
            ...newArray[index],
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
          };
          setUsersList(newArray);
        }
      });
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className="user-modal-bg">
      <div className="user-modal">
        <h2>Edit User</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="website">Website: </label>
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Save</button>
          <button onClick={toggleEditModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;
