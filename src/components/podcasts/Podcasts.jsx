import React from 'react';
import { Link } from 'react-router-dom';
import './podcasts.css';

function Podcasts({ searchResults }) {
  const textUpperCase = (text) => text.toUpperCase();
  return (
    searchResults.map((podcast) => (
      <Link to={`podcast/${podcast.id.attributes['im:id']}`} style={{ textDecoration: 'none' }} key={podcast['im:name'].label}>
        <div className="podcasts-card">
          <img src={podcast['im:image'][2].label} alt={podcast['im:name'].label} />
          <div className="podcasts-card-text">
            <p className="fw-bold">{textUpperCase(podcast['im:name'].label)}</p>
            <p className="fw-light">
              <span>Author: </span>
              {textUpperCase(podcast['im:artist'].label)}
            </p>
          </div>
        </div>
      </Link>
    ))
  );
}

export default Podcasts;
