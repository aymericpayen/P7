import { useState } from "react";

/* eslint-disable react/prop-types */
const Caroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);
  const next = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex + 1 === images.length ? 0 : previousIndex + 1
    );
  };
  console.log(currentIndex);
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
      </div>
    </>
  );
};

export default Caroussel;