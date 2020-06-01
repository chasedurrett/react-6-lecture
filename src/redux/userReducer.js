const initialState = {
  user: "dragon crew bb",
  isLoggedIn: false,
};

const LOGIN_USER = "LOGIN_USER";

// ACTION CREATOR
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}
// DEFAULT EXPORT IS REDUCER FUNCTION //
export default function (state = initialState, action, type) {
  switch ((action, type)) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    default:
      return state;
  }
}
