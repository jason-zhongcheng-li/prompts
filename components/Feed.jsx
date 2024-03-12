'use client';

import React, { Suspense, useState, useEffect } from 'react';
import useSWR from '@node_modules/swr/core/dist/index';
import PromptCardLoader from './prompt-card/PromptCardLoader';

const PromptCard = React.lazy(() => import('./prompt-card/PromptCard'));

const PromptCardList = ({ data, handleTagClick }) => (
   <div className="mt-16 prompt_layout">
      <Suspense
         fallback={
            <>
               <PromptCardLoader />
               <PromptCardLoader />
               <PromptCardLoader />
               <PromptCardLoader />
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
      </Suspense>
   </div>
);

const fetchPosts = async () => {
   const response = await fetch('/api/prompt');
   return await response.json();
};

const Feed = () => {
   const [searchText, setSearchText] = useState('');

   const { data: posts } = useSWR('/api/prompt', fetchPosts, {
      revalidateOnMount: true,
   });
   // const [posts, setPosts] = useState([]);

   // useEffect(() => {
   //    const controller = new AbortController();
   //    const signal = controller.signal;
   //    const fetchPost = async () => {
   //       const response = await fetch('/api/prompt', {
   //          signal,
   //       });
   //       const data = await response.json();
   //       setPosts(data);
   //    };
   //    fetchPost().catch((error) => console.log('error = ', error));

   //    return () => controller.abort();
   // }, []);

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
         <PromptCardList data={posts} handleTagClick={() => {}} />
      </section>
   );
};

export default Feed;
