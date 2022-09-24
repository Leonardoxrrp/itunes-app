import React from 'react';
import useGetPodcasts from '../../hooks/useGetPodcasts';
import './podcasts.css';

function Podcasts({ filtering }) {
  const { podcasts } = useGetPodcasts();
  const textUpperCase = (text) => text.toUpperCase();
  const filterLogic = (name, author) => {
    const includesAuthor = author.toLowerCase().includes(filtering);
    const includesName = name.toLowerCase().includes(filtering);
    if (filtering === null) return true;
    if (includesName || includesAuthor) return true;
    return false;
  };
  console.log(filtering, 'filtering');
  return (
    podcasts?.entry?.filter((podcast) => filterLogic(podcast['im:name'].label, podcast['im:artist'].label)).map((podcast) => (
      <div className="podcasts-card" key={podcast['im:name'].label}>
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
