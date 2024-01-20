'use client';

const Loader = ({ isLoading, fallback, children }) => {
   if (!isLoading) {
      return children;
   }

   return fallback;
};

export default Loader;
