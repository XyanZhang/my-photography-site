import React, { ReactNode } from 'react';
import Header from './header'
type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <header className='fixed top-0 left-0 right-0 h-16 border-b-black'>
        <Header></Header>
      </header>
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;