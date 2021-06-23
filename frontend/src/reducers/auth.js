const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  user: [],
  checkRegister: false,
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
        checkRegister: true
      }
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token);
      console.log("THis is login_success");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: []
      }
    case 'Init':
      return {
        ...state,
        checkRegister: false
      }
    default:
      return state;
  }
}
