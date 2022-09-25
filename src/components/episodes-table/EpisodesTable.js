import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './episodes-table.css';

function EpisodesTable({ episodes }) {
  // index 0 is not an episode
  const allEpisodes = episodes.slice(1);

  const releaseDate = (date) => {
    const mydate = new Date(date);
    return `${mydate.getDay()}/${mydate.getMonth()}/${mydate.getFullYear()}`;
  };
  const minutes = (milliseconds) => {
    if (!milliseconds) return 'No time';
    const date = new Date(milliseconds);
    const seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
    return `${date.getMinutes()}:${seconds}`;
  };

  return (
    <Table hover striped size="sm" style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th className="td-details">Title</th>
          <th className="td-details">Date</th>
          <th className="td-details">Duration</th>
        </tr>
      </thead>
      <tbody>
        {
            allEpisodes.map((episode) => (
              <tr key={episode.trackId}>
                <td className="episodes-table-trackname"><Link to={`episode/${episode.trackId}`}>{episode.trackName}</Link></td>
                <td className="td-details"><Link to={`episode/${episode.trackId}`}>{releaseDate(episode.releaseDate)}</Link></td>
                <td className="td-details"><Link to={`episode/${episode.trackId}`}>{minutes(episode.trackTimeMillis)}</Link></td>
              </tr>
            ))
        }
      </tbody>
    </Table>
  );
}

export default EpisodesTable;
