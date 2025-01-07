import React, { useState } from "react";
import "./SmCard-2.css";
import ScrollToTop from "../../ScrollToTop.jsx";

const galleryData = [
  {
    title: "Kitten: Ollie",
    age: "12 Weeks",
    imageUrl: "Social-media-design/BERRY.jpg",
  },
  {
    title: "Puppy: Barney",
    age: "9 Weeks",
    imageUrl: "Social-media-design/gym.jpg",
  },
  {
    title: "Cat: Walter",
    age: "5 Years",
    imageUrl: "Social-media-design/heineken.jpg",
  },
  {
    title: "Dog: Miss Sunshine",
    age: "2 Years",
    imageUrl: "Social-media-design/MENU.jpg",
  },
  {
    title: "Kitten: Reese",
    age: "8 Weeks",
    imageUrl: "Social-media-design/modern.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Social-media-design/NIKE.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Social-media-design/phil.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Social-media-design/Woman.jpg",
  },
];

const CustomGallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <ScrollToTop />
      <div className="custom-gallery-wrapper">
        <h1 className="custom-gallery-heading">Social Media Designs</h1>
        <div className="custom-gallery-grid">
          {galleryData.map((item, index) => (
            <div
              className="custom-gallery-card"
              key={index}
              onClick={() => openModal(item.imageUrl)}
            >
              <div
                className="custom-gallery-image-container"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {modalImage && (
          <div className="custom-modal-overlay" onClick={closeModal}>
            <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Expanded View" className="custom-modal-img" />
              <button className="custom-modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomGallery;
