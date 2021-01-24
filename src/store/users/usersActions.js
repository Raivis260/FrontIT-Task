import axios from "axios";
import * as actionTypes from "./usersActionTypes";

export const loadUsers = () => async (dispatch) => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: actionTypes.GET_USERS,
    payload: {
      users: users.data,
    },
  });
};
