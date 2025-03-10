import { useCallback, useReducer } from 'react';
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCESS } from './actionTypes';
import { youtubeVideosReducer } from './youtubeVideosReducer';

const initialState = {
  videos: [],
  nextPageToken: null,
  isLoading: false,
};

export function useYoutubeVideos() {
  const [state, dispatch] = useReducer(youtubeVideosReducer, initialState);

  const fetchHomeVideos = useCallback(async () => {
    try {
      const {
        gapi: {
          client: { youtube },
        },
      } = window;
      dispatch({ type: HOME_VIDEOS_REQUEST });
      const { result } = await youtube.videos.list({
        part: ['contentDetails,snippet,id'],
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'CO',
      });
      const newPayload = { videos: result.items, nextPageToken: result.nextPageToken };
      dispatch({ type: HOME_VIDEOS_SUCESS, payload: newPayload });
    } catch (error) {
      dispatch({ type: HOME_VIDEOS_FAIL });
    }
  }, []);

  return { ...state, fetchHomeVideos };
}
