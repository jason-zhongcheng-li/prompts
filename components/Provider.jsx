'use client';

import { SessionProvider } from '@node_modules/next-auth/react';

const Provider = ({ children, sesstion }) => {
   return <SessionProvider sesstion={sesstion}>{children}</SessionProvider>;
};

export default Provider;
