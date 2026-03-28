import React from 'react';

const Header = ({ searchQuery, onSearchChange, sortBy, onSortChange }) => {
  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleSelectChange = (e) => {
    onSortChange(e.target.value || 'popularity.desc');
  };

  return (
    <header>
      <div className="header-title">
        <h1>Movie Explorer</h1>
      </div>
      <div className="drop-down-menu-controls">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <select value={sortBy} onChange={handleSelectChange}>
          <option value="popularity.desc">Sort by</option>
          <option value="release_date.asc">Release Date (Asc)</option>
          <option value="release_date.desc">Release Date (Desc)</option>
          <option value="vote_average.asc">Rating (Asc)</option>
          <option value="vote_average.desc">Rating (Desc)</option>
        </select>
      </div>
    </header>
  );
};

export default Header;