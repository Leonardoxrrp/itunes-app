import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function useGetDetails() {
  const { podcastId } = useParams();
  const [podcastDetails, setPodcastDetails] = useState([]);
  const getDetails = async () => {
    const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=65`;
    try {
      const { data: { results } } = await axios.get(url);
      console.log(results, 'results');
      setPodcastDetails(results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return {
    podcastDetails,
  };
}

export default useGetDetails;
