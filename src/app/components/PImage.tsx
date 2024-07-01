'use client';

import React from 'react';
import Image from "next/image";

const PImage = ({ src, imageProps }: { src: string, imageProps: any}) => {

  return (
    <Image
      src={src.replace('public', 'api')}
      alt="search"
      width={100}
      height={24}
      priority
      {
        ...imageProps
      }
    />
  );
};

export default PImage;