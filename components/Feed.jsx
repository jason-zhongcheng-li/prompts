'use client';

import React, { useState } from 'react';
import PromptCard from './PromptCard';
import useSWR from '@node_modules/swr/core/dist/index';

const PromptCardList = ({ data, handleTagClick }) => (
   <div className="mt-16 prompt_layout">
      {data?.map((post) => (
         <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
         />
      ))}
   </div>
);

const fetchPosts = async () => {
   const response = await fetch('/api/prompt');
   return await response.json();
};

const Feed = () => {
   const [searchText, setSearchText] = useState('');
   const { data: posts, error, isLoading } = useSWR('/api/prompt', fetchPosts);

   const handleSearchTextChanged = (e) => {
      setSearchText(e.target.value);
   };

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
         {!isLoading && (
            <PromptCardList data={posts} handleTagClick={() => {}} />
         )}
      </section>
   );
};

export default Feed;
