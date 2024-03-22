'use client';

import React, { useState } from 'react';
import Image from "next/image";
import SvgIcon from '@/app/assets/svg/search.svg'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // 在这里执行搜索逻辑
    console.log('搜索:', searchText);
  };

  return (
    <div className='flex-1 flex items-center'>
      <input placeholder='search' className='flex-1 border-none outline-none' type="text" value={searchText} onChange={handleInputChange} />
      <Image
        src={SvgIcon}
        alt="search"
        className="dark:invert w-5 h-5"
        width={100}
        height={24}
        priority
      />
    </div>
  );
};

export default SearchInput;