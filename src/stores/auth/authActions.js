export const signIn = (credentials, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_SIGNIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign in failed');
      }

      const data = await response.json();

      dispatch({ type: 'SIGNIN_SUCCESS', payload: data });

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      onSuccess && onSuccess(data);
    } catch (error) {
      dispatch({ type: 'SIGNIN_FAIL', payload: error.message });
      onError && onError(error.message);
    }
  };
};

export const signUp = (userInfo, onSuccess, onError) => {
  return async (dispatch) => {
    try {
      const resSignUp = await fetch(`${process.env.REACT_APP_API_URL_SIGNUP}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });

      if (!resSignUp.ok) {
        const errData = await resSignUp.json();
        throw new Error(errData.message || 'Signup failed');
      }

      const credentials = {
        email: userInfo.email,
        password: userInfo.password,
      };

      const resSignIn = await fetch(`${process.env.REACT_APP_API_URL_SIGNIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!resSignIn.ok) {
        const errSignIn = await resSignIn.json();
        throw new Error(errSignIn.message || 'Signin failed after signup');
      }

      const data = await resSignIn.json();

      dispatch({ type: 'SIGNIN_SUCCESS', payload: data });

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      onSuccess && onSuccess(data);
      return Promise.resolve();
    } catch (error) {
      dispatch({ type: 'SIGNIN_FAIL', payload: error.message });
      onError && onError(error.message);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_SIGNOUT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ refreshToken })
      });

      if (response.status === 204) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
         dispatch({ type: 'LOGOUT' });
      }
    } catch (error) {
        console.error('Logout failed:', error);
    }
  };
};