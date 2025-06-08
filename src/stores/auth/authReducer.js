const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        error: null,
      };
    case 'SIGNIN_FAIL':
      return { ...state, error: action.payload };
    case "LOGOUT":
      return {
        ...state,
        isLoading: false,
        user: null,
        accessToken: null,
        refreshToken: null,
        error: null
      };
    default:
      return state;
  }
}