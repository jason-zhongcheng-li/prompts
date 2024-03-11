import 'styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
   title: 'Promptopia',
   description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => (
   <html lang="en">
      <body suppressContentEditableWarning={true}>
         <Provider>
            <div className="main">
               <div className="gradient" />
            </div>

            <main className="app">
               <Nav />
               {children}
               <Analytics />
            </main>
         </Provider>
      </body>
   </html>
);

export default RootLayout;
