import Linkify from 'linkify-react';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PodcastDetails from '../../components/podcastDetails/PodcastDetails';
import { Context } from '../../context/AppContext';

function EpisodeId() {
  const { podcastDetails } = useContext(Context);
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
          <hr />
          <audio
            style={{ width: '100%', marginBottom: '20px' }}
            controls
            src={episode?.episodeUrl}
          >
            <track
              default
              kind="captions"
              srcLang="en"
            />
          </audio>
        </div>
      </div>
    </PodcastDetails>
  );
}

export default EpisodeId;
