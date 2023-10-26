import { useState } from "react";

/* eslint-disable react/prop-types */
const Caroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex + 1 === images.length ? 0 : previousIndex + 1
    );
  };
  const previous = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  };
  return (
    <>
      <div className="slider">
        {images.map((image, index) => (
          <div
            className={index === currentIndex ? "slide active" : "slide"}
            key={index}
          >
            <img src={image} alt="" />
          </div>
        ))}
        <button className="btn btn-next" onClick={() => next()}>
          {">"}
        </button>
        <button className="btn btn-prev" onClick={() => previous()}>
          {"<"}
        </button>
        <div className="image-count">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </>
  );
};

export default Caroussel;
