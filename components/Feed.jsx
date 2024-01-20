'use client';

import { useState } from 'react';
import useSWR from '@node_modules/swr/core/dist/index';
import PromptCard from './prompt-card/PromptCard';
import PromptCardLoader from './prompt-card/PromptCardLoader';
import Loader from './loader/Loader';

const PromptCardList = ({ data, handleTagClick, isLoading }) => (
   <div className="mt-16 prompt_layout">
      <Loader
         isLoading={isLoading}
         fallback={
            <>
               <PromptCardLoader />
               <PromptCardLoader />
            </>
         }
      >
         {data?.map((post) => (
            <PromptCard
               key={post._id}
               post={post}
               handleTagClick={handleTagClick}
            />
         ))}
      </Loader>
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
         <PromptCardList
            data={posts}
            handleTagClick={() => {}}
            isLoading={isLoading}
         />
      </section>
   );
};

export default Feed;
