import React, { useCallback, useContext, useReducer } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { useYoutubeVideosByKeyword } from 'hooks/youtube/videos/useYoutubeVideosByKeyword';
import {
  defaultState,
  LAST_VIDEO_WATCHED,
  SET_LOADING,
  SET_SEARCH_RELARED_VIDEOS,
  SET_SEARCH_TERM,
  youtubeReducer,
} from './reducers';

const YoutubeContext = React.createContext(null);

function useYouTube() {
  const context = useContext(YoutubeContext);
  if (!context) {
    throw new Error(`Can't use "useYouTube" without YouTubeProvider!`);
  }
  return context;
}

function YouTubeProvider({ children }) {
  const [youtubeState, dispatch] = useReducer(youtubeReducer, defaultState);
  const location = useLocation();
  const history = useHistory();
  const { fetchVideosByKeyword } = useYoutubeVideosByKeyword();

  const setYouTubeSearchTerm = useCallback(async () => {
    const { searchText } = queryString.parse(location.search);
    if (!searchText) {
      history.push('/404');
    }
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_SEARCH_TERM, payload: { searchTerm: searchText } });
    const videos = await fetchVideosByKeyword({ keyword: searchText });
    if (videos) {
      dispatch({
        type: SET_SEARCH_RELARED_VIDEOS,
        payload: { relatedVideos: videos },
      });
    }
    dispatch({ type: SET_LOADING, payload: false });
  }, [fetchVideosByKeyword, history, location.search]);

  const setLastVideoWatched = useCallback((videoId) => {
    const payload = { lastVideoWatchedId: videoId };
    dispatch({ type: LAST_VIDEO_WATCHED, payload });
  }, []);

  return (
    <YoutubeContext.Provider
      value={{
        youtubeState,
        setYouTubeSearchTerm,
        setLastVideoWatched,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}

export { useYouTube };
export default YouTubeProvider;
