import Linkify from 'linkify-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import useGetDetails from '../../hooks/useGetDetails';

function EpisodeId() {
  const { podcastDetails } = useGetDetails();
  const { episodeId } = useParams();
  const episode = podcastDetails?.find((element) => Number(element.trackId) === Number(episodeId));
  const description = episode?.shortDescription || episode?.description;
  return (
    <PodcastDetails>
      <div className="podcastid-right-side">
        <div className="podcastid-right-side-details">
          <h2>{episode?.trackName}</h2>
          <Linkify>
            <p className="fst-italic">{description}</p>
          </Linkify>
          <p />
        </div>
      </div>
    </PodcastDetails>
  );
}

export default EpisodeId;
