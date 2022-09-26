import React from 'react';

const CoverPicture = ({ src, userName }) => {
  return (
    <div className="cover-picture">
      <img src={src} alt={`${userName}'s cover-pic`} />
    </div>
  );
};

export default CoverPicture;
