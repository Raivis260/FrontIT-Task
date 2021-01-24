import * as actionTypes from "./usersActionTypes";

const initState = {
  users: [],
  isLoading: true,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
