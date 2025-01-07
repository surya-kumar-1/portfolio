import React from 'react';
import './Sub-Enchroma.css';

const imageUrls = [
  'assets/sm-image-1.jpg',
  'assets/sm-image-2.jpg',
  'assets/sm-image-3.jpg',
  'assets/sm-image-4.jpg',
];

function SubSmImages() {
  return (
    <div className="custom-gallery-container">
      {imageUrls.map((url, index) => (
        <div className="custom-gallery-item" key={index}>
          <img src={url} alt={`Gallery item ${index + 1}`} className="custom-gallery-image" />
        </div>
      ))}
    </div>
  );
}

export default SubSmImages;
