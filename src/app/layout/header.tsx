import React, { ReactNode } from 'react';
import SearchInput from '@/app/components/SearchInput';

const Header = () => {
  return (
    <div className='flex h-full bg-white'>
      <div className='flex w-1/2 border-r-black'>
        <span className='w-48 flex items-center justify-center cursor-pointer border-r-black'>LIMAGES</span>
        <div className='px-10 flex flex-1'>
          <SearchInput></SearchInput>
        </div>
      </div>
      <div className='w-1/2'>

      </div>
    </div>
  );
};

export default Header;