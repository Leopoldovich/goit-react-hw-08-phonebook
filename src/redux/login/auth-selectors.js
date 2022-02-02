export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;
export const getUseremail = state => state.auth.user.email;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
