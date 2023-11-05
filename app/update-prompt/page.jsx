'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from '@node_modules/next-auth/react';
import { useRouter, useSearchParams } from '@node_modules/next/navigation';

import Form from '@components/Form';

const UpdatePrompt = ({ param }) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [submitting, setSutmitting] = useState(false);

   const [post, setPost] = useState({ prompt: '', tag: '' });

   const { data: session } = useSession();

   const promptId = searchParams.get('id');

   useEffect(() => {
      const getPromptDetails = async (promptId) => {
         const response = await fetch(`/api/prompt/${promptId}`, {
            method: 'GET',
         });

         const data = await response.json();

         setPost(data);
      };

      if (session?.user.id && promptId) {
         getPromptDetails(promptId);
      }
   }, [promptId, session?.user]);

   const updatePrompt = async (e) => {
      e.preventDefault();
      setSutmitting(true);

      try {
         const response = await fetch(`/api/prompt/${promptId}`, {
            method: 'PATCH',
            body: JSON.stringify({
               ...post,
               userId: session?.user.id,
            }),
         });

         if (response.ok) {
            router.push('/');
         }
      } catch (error) {
      } finally {
         setSutmitting(false);
      }
   };

   return (
      <Form
         type="Update"
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={updatePrompt}
      />
   );
};

export default UpdatePrompt;
