'use client';
import { useState } from 'react';

const SearchInput = () => {
   const [searchText, setSearchText] = useState('');

   const handleSearchTextChanged = (e) => {
      setSearchText(e.target.value);
   };

   return (
      <form className="relative w-full flex-center">
         <input
            type="text"
            placeholder="Search for a tag or a username"
            value={searchText}
            onChange={handleSearchTextChanged}
            required
            className="search_input peer"
         />
      </form>
   );
};

export default SearchInput;
