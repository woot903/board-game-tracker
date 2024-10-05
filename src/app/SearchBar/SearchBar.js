import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchBar.scss'

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Form>
      <Form.Group className='search-bar' controlId="searchBar">
        <Form.Control
          type="text"
          placeholder="Search For a Board Game..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
