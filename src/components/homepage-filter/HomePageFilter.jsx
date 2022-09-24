import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './homepage-filter.css';

function HomePageFilter({ setFiltering }) {
  const handleChange = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setFiltering(value);
  };

  return (
    <div className="homepage-filter-input">
      <div>
        <InputGroup size="sm" className="mb-3">
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
