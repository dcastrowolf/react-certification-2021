import { useCallback, useReducer } from 'react';
import {
  RESULTS_VIDEOS_FAIL,
  RESULTS_VIDEOS_REQUEST,
  RESULTS_VIDEOS_SUCESS,
} from './actionTypes';
import { youtubeVideosReducer } from './youtubeVideosReducer';

const initialState = {
  videos: [],
  nextPageToken: null,
  isLoading: false,
};

export function useYoutubeVideosByKeyword() {
  const [state, dispatch] = useReducer(youtubeVideosReducer, initialState);

  const fetchVideosByKeyword = useCallback(async ({ keyword }) => {
    try {
      const {
        gapi: {
          client: { youtube },
        },
      } = window;
      dispatch({ type: RESULTS_VIDEOS_REQUEST });
      const { result } = await youtube.search.list({
        part: ['id,snippet'],
        maxResults: 25,
        q: keyword,
      });
      const newPayload = { videos: result.items, nextPageToken: result.nextPageToken };
      dispatch({ type: RESULTS_VIDEOS_SUCESS, payload: newPayload });
    } catch (error) {
      dispatch({ type: RESULTS_VIDEOS_FAIL });
    }
  }, []);

  const { videos, isLoading } = state;
  return { videos, isLoading, fetchVideosByKeyword };
}
