import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <header>Header</header> */}
      <main>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;