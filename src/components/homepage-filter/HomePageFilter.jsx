import React from 'react';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import { filterLogic } from '../utils/filterLogic';
import './homepage-filter.css';

function HomePageFilter({ podcasts, searchResults, setSearchResults }) {
  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const search = podcasts?.entry?.filter((podcast) => filterLogic(podcast['im:name'].label, podcast['im:artist'].label, value));
    setSearchResults(search || podcasts.entry);
  };

  return (
    <div className="homepage-filter-input">
      <Badge bg="info" className="homepagefilter-badge">{searchResults.length}</Badge>
      <div>
        <InputGroup>
          <Form.Control
            onChange={handleChange}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
    </div>
  );
}

export default HomePageFilter;
