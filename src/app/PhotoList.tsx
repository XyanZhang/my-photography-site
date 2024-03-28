import React from 'react';

interface PhotoListProps {
  photos: string[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {

  return (
    <div className='flex flex-wrap flex-col max-h-200vh overflow-hidden'>
      {photos.map((photo, index) => {
        return (
          <div className='h-60 bg-black m-4 opacity-30' style={{ backgroundColor: getRandomColor(), height: index%3 == 0 ? '300px' : '160px' }}>
            index: {index}
          </div>
        )
      })}
    </div>
  );
};

export default PhotoList;


function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor.padStart(6, '0');
}