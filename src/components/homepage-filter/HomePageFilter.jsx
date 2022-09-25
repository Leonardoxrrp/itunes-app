import React, { useContext } from 'react';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import { Context } from '../../context/AppContext';
import { filterLogic } from '../utils/filterLogic';
import './homepage-filter.css';

function HomePageFilter() {
  const { podcasts, searchResults, setSearchResults } = useContext(Context);
  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    const search = podcasts?.entry?.filter((podcast) => filterLogic(podcast['im:name'].label, podcast['im:artist'].label, value));
    setSearchResults(search || podcasts.entry);
  };

  return (
    <div className="homepage-filter-container">
      <Badge bg="info" className="homepagefilter-badge">{searchResults.length}</Badge>
      <div className="homepage-filter-input">
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
