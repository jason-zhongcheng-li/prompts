'use client';

import React, { useState } from 'react';
import { useSession } from '@node_modules/next-auth/react';
import { useRouter } from '@node_modules/next/router';

import Form from '@components/Form';

const CreatePrompt = () => {
   const [submitting, setSutmitting] = useState(false);

   const [post, setPost] = useState({ prompt: '', tag: '' });

   const { data: profile } = useSession();

   const createPrompt = async () => {};

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
