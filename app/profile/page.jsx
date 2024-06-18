'use client';

import { useSession } from '@node_modules/next-auth/react';
import { useRouter } from '@node_modules/next/navigation';
import useSWR from '@node_modules/swr/dist/core/index';
import Profile from '@components/Profile';

const fetchPosts = async (userId) => {
   const response = await fetch(`/api/users/${userId}/posts`);
   return await response.json();
};

const MyProfile = () => {
   const { data: session } = useSession();
   const router = useRouter();

   const { data: posts } = useSWR(`/api/users/${session?.user.id}/posts`, () =>
      fetchPosts(session?.user.id),
   );

   // const [posts, setPosts] = useState([]);

   // useEffect(() => {
   //    const controller = new AbortController();
   //    const fetchPost = async () => {
   //       const response = await fetch(`/api/users/${session?.user.id}/posts`);
   //       console.log('response = ', response);
   //       const data = await response.json();

   //       setPosts(data);
   //    };
   //    if (session?.user.id) {
   //       fetchPost();
   //    }
   //    return () => controller.abort();
   // }, [session?.user]);

   const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`);
   };

   const handleDelete = async (post) => {
      const hasConfirmed = confirm(
         'Are you sure you want to delete this post?',
      );

      if (hasConfirmed) {
         try {
            const response = await fetch(`/api/prompt/${post._id}`, {
               method: 'DELETE',
            });

            if (response.ok) {
               router.push('/');
            }
         } catch (error) {
            console.error(error);
         }
      }
   };

   return (
      <Profile
         name={session?.user.name}
         desc="Welcome to your personalized profile page"
         data={posts}
         handleEdit={handleEdit}
         handleDelete={handleDelete}
      />
   );
};

export default MyProfile;
