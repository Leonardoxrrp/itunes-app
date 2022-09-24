import React from 'react';
import useGetPodcasts from '../../hooks/useGetPodcasts';
import './podcasts.css';

function Podcasts() {
  const { podcasts } = useGetPodcasts();
  console.log(podcasts, 'test');
  const textUpperCase = (text) => text.toUpperCase();
  return (
    podcasts?.entry?.map((podcast) => (
      <div className="podcasts-card" key={Math.floor(10000) * 1000}>
        <img src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
        <div className="podcasts-card-text">
          <p className="fw-bold">{textUpperCase(podcast['im:name'].label)}</p>
          <p className="fw-light">
            <span>Author: </span>
            {textUpperCase(podcast['im:artist'].label)}
          </p>
        </div>
      </div>
    ))
  );
}

export default Podcasts;
