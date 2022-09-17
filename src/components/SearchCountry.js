import React from "react";

const SearchContry = ({ input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type='text' onChange={handleChange} />
    </div>
  );
};

export default SearchContry;
