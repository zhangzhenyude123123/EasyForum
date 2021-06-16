const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        checkRegiste: true
      }
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token);
      console.log("THis is login_success");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    default:
      return state;
  }
}
