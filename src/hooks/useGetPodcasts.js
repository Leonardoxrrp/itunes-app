import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const getPodcasts = async () => {
    try {
      const { data: { feed } } = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
      setPodcasts(feed);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPodcasts();
  }, []);
  return {
    podcasts,
  };
}

export default useGetPodcasts;
