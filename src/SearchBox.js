import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-light-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
