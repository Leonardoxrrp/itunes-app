import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getPodcasts = async () => {
    const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    try {
      const { data: { feed } } = await axios.get(url);
      setPodcasts(feed);
      setSearchResults(feed.entry);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPodcasts();
  }, []);
  return {
    podcasts,
    searchResults,
    setSearchResults,
  };
}

export default useGetPodcasts;
