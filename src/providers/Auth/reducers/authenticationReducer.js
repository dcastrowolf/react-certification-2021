import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGOUT,
  ADD_FAVORITE_VIDEO,
  REMOVE_FAVORITE_VIDEO,
} from './actionTypes';

export const authenticationState = {
  token: null,
  authenticated: false,
  loading: false,
  userData: {
    id: null,
    name: null,
    avatarUrl: null,
    favoriteVideos: [],
  },
  error: null,
};

export function authenticationReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload.userData,
        token: payload.token,
        authenticated: !!payload.token,
        loading: false,
      };
    case LOGIN_FAIL:
      return { ...state, error: payload };
    case ADD_FAVORITE_VIDEO:
      return {
        ...state,
        userData: {
          ...state.userData,
          favoriteVideos: [...state.userData.favoriteVideos, payload.video],
        },
      };
    case REMOVE_FAVORITE_VIDEO: {
      const favoriteVideos = [...state.userData.favoriteVideos].filter(
        (v) => v.id !== payload.video.id
      );
      return {
        ...state,
        userData: {
          ...state.userData,
          favoriteVideos,
        },
      };
    }
    case LOGOUT:
      return { ...authenticationState };
    default:
      return state;
  }
}
