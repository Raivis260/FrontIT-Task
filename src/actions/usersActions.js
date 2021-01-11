import axios from "axios";

export const loadUsers = () => async (dispatch) => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: "GET_USERS",
    payload: {
      users: users.data,
    },
  });
};
