import Cookies from "js-cookie";
// const token = Cookies.get('token')
interface Auth {
  token: string | null,
  isLoaded: Boolean,
  name:string
}
interface Action {
  type: string;
  payload: {
    token: string,
    name: string
  };
}

let initialState: Auth;
try {
  initialState = JSON.parse(localStorage.auth);
} catch (e) {
  initialState = {
    token: null,
    isLoaded: false,
    name:''
  };
}
// Cookies.get('token') || ""
//
// initialState = 123
// initialState = {
//   token: '3'
// }
console.log(initialState);
function authReducer(state: Auth = initialState, action: Action): Auth {
  if (action.type === "auth/loaded") {
    return {
      ...state,
      // isLoaded: action.payload.isLoaded,
      token: action.payload.token,
      name: action.payload.name
    };
  }
  // console.log(state)
  return state;
}

export default authReducer;
