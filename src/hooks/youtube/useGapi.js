import { useState, useEffect } from 'react';

export function useGapi() {
  const [gapi, setGapi] = useState(null);

  useEffect(() => {
    async function setUpYouTubeApi() {
      try {
        const { REACT_APP_YOUTUBE_API_KEY } = process.env;
        await window.gapi.client.setApiKey(REACT_APP_YOUTUBE_API_KEY);
        await window.gapi.client.load(
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
        );
        setGapi(window.gapi);
      } catch (error) {
        console.error('ERROR SETTING UP --->', error);
      }
    }
    window.gapi.load('client:auth2', setUpYouTubeApi);
  }, []);

  return gapi;
}
