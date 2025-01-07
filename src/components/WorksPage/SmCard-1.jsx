import React, { useState } from "react";
import "./SmCard-1.css";
import ScrollToTop from "../../ScrollToTop.jsx";

const galleryItems = [
  {
    title: "Kitten: Ollie",
    age: "12 Weeks",
    imageUrl: "Posters/BENZ.jpg",
  },
  {
    title: "Puppy: Barney",
    age: "9 Weeks",
    imageUrl: "Posters/Black.jpg",
  },
  {
    title: "Cat: Walter",
    age: "5 Years",
    imageUrl: "Posters/CAR.jpg",
  },
  {
    title: "Dog: Miss Sunshine",
    age: "2 Years",
    imageUrl: "Posters/OIU.jpg",
  },
  {
    title: "Kitten: Reese",
    age: "8 Weeks",
    imageUrl: "Posters/poss.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Posters/spider.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Posters/travels.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "Posters/XX.jpg",
  },
];

const SmCardOne = () => {
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
      <div className="gallery-container">
        <h1 className="gallery-title">Posters</h1>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(item.imageUrl)}
            >
              <div
                className="gallery-image"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {modalImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Expanded View" className="modal-image" />
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SmCardOne;
