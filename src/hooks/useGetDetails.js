import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isTimestampExpired } from '../components/utils/isTimestampExpired';

function useGetDetails() {
  const { podcastId } = useParams();
  const [podcastDetails, setPodcastDetails] = useState([]);
  const getDetails = async () => {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=65`;
    try {
      const { data: { results } } = await axios.get(url);
      setPodcastDetails(results);
      const obj = { value: results, timestamp: new Date().getTime() };
      localStorage.setItem(`podcast/${podcastId}`, JSON.stringify(obj));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (!podcastId) return undefined;
    const storage = localStorage.getItem(`podcast/${podcastId}`);
    const data = JSON.parse(storage);
    if (data && !isTimestampExpired(data.timestamp, moment())) {
      setPodcastDetails(data.value);
    } else {
      getDetails();
    }
  }, []);
  return {
    podcastDetails,
  };
}

export default useGetDetails;
