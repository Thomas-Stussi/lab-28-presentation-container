import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSubmit, onChange }) => (
  <>
    <label htmlFor="search">Search</label>
    <input
      id="search"
      type="search"
      name="search"
      value={search}
      onChange={onChange}
    />
    <button onClick={onSubmit}>Search</button>
  </>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
