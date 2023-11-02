import NextAuth from '@node_modules/next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
         clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
      }),
   ],
   async session({ session }) {},
   async signIn({ profile }) {},
});

export { handler as GET, handler as POST };