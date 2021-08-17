import {
  LAST_VIDEO_WATCHED,
  SET_SEARCH_RELARED_VIDEOS,
  SET_SEARCH_TERM,
  SET_LOADING,
} from './actionTypes';

export const defaultState = {
  lastVideoWatchedId: null,
  searchTerm: null,
  videosFromSearchTerm: [],
  isLoading: false,
  error: null,
};

export function youtubeReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload.searchTerm,
        isLoading: false,
      };
    case SET_SEARCH_RELARED_VIDEOS: {
      const {
        relatedVideos: { videos },
      } = payload;
      return {
        ...state,
        isLoading: false,
        videosFromSearchTerm: [...videos],
      };
    }
    case LAST_VIDEO_WATCHED:
      return {
        ...state,
        isLoading: false,
        lastVideoWatchedId: payload.lastVideoWatchedId,
      };
    default:
      return state;
  }
}
