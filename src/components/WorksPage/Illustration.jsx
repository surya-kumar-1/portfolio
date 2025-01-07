import React, { useState } from "react";
import "./Illustration.css";

const illustrationItems = [
  {
    title: "Kitten: Ollie",
    age: "12 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/tr.jpg",
  },
  {
    title: "Puppy: Barney",
    age: "9 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/trw.jpg",
  },
  {
    title: "Cat: Walter",
    age: "5 Years",
    imageUrl: "assets/Illustratons-and-custom-art/trg.jpg",
  },
  {
    title: "Dog: Miss Sunshine",
    age: "2 Years",
    imageUrl: "assets/Illustratons-and-custom-art/trj.jpg",
  },
  {
    title: "Kitten: Reese",
    age: "8 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/trs.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/trc.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/umb.jpg",
  },
  {
    title: "Puppy: Bruce",
    age: "10 Weeks",
    imageUrl: "assets/Illustratons-and-custom-art/Side.png",
  },
];

const Illustration = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="illustration-container">
      <h1 className="illustration-title">Illustrations and Custom Art</h1>
      <div className="illustration-grid">
        {illustrationItems.map((item, index) => (
          <div
            className="illustration-item"
            key={index}
            onClick={() => openModal(item.imageUrl)}
          >
            <div
              className="illustration-image"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {modalImage && (
        <div className="illustration-modal-overlay" onClick={closeModal}>
          <div
            className="illustration-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Expanded View"
              className="illustration-modal-image"
            />
            <button className="illustration-modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Illustration;
