'use client';

import React, { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => (
   <div className="mt-16 prompt_layout">
      {data.map((post) => (
         <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
         />
      ))}
   </div>
);

const Feed = () => {
   const [posts, setPosts] = useState([]);
   const [searchText, setSearchText] = useState('');

   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch('/api/prompt');
         const data = await response.json();

         setPosts(data);
      };
      fetchPost();
   }, []);

   const handleSearchTextChanged = (e) => {};

   return (
      <section className="feed">
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

         <PromptCardList data={posts} handleTagClick={() => {}} />
      </section>
   );
};

export default Feed;
