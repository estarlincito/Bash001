import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Footer from './components/footer';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body
        className={clsx('bg-white dark:bg-black', 'text-black dark:text-white')}
      >
        <main className='container mx-auto p-5 md:p-0'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
