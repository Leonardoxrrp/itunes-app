import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { isTimestampExpired } from '../components/utils/isTimestampExpired';

function useGetPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const getPodcasts = async () => {
    const url = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
    try {
      const { data: { feed } } = await axios.get(url);
      setPodcasts(feed);
      setSearchResults(feed.entry);
      const obj = { value: feed, timestamp: new Date().getTime() };
      localStorage.setItem('podcasts', JSON.stringify(obj));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const storage = localStorage.getItem('podcasts');
    const data = JSON.parse(storage);
    if (data && !isTimestampExpired(data.timestamp, moment())) {
      setPodcasts(data.value);
      setSearchResults(data.value.entry);
    } else {
      getPodcasts();
    }
  }, []);
  return {
    podcasts,
    searchResults,
    setSearchResults,
  };
}

export default useGetPodcasts;
