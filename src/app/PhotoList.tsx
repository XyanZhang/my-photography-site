import React from 'react';

interface PhotoListProps {
  photos: string[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  return (
    <div>
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index}`} />
      ))}
    </div>
  );
};

export default PhotoList;
