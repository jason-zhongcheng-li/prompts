'use client';

import React, { useState } from 'react';
import { useSession } from '@node_modules/next-auth/react';
import { useRouter } from '@node_modules/next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
   const router = useRouter();
   const [submitting, setSutmitting] = useState(false);

   const [post, setPost] = useState({ prompt: '', tag: '' });

   const { data: session } = useSession();

   const createPrompt = async (e) => {
      e.preventDefault();
      setSutmitting(true);

      try {
         const res = await fetch('/api/prompt/new', {
            method: 'post',
            body: JSON.stringify({
               ...post,
               userId: session?.user.id,
            }),
         });

         if (res.ok) {
            router.push('/');
         }
      } catch (error) {
      } finally {
         setSutmitting(false);
      }
   };

   return (
      <Form
         type="Create"
         post={post}
         setPost={setPost}
         submitting={submitting}
         handleSubmit={createPrompt}
      />
   );
};

export default CreatePrompt;
