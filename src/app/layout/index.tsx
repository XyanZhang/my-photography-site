import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer';
type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <header className='fixed top-0 left-0 right-0 h-16 border-b-black z-10'>
        <Header></Header>
      </header>
      <main style={{marginTop: '63px'}}>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;