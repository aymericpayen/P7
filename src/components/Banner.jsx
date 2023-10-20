// eslint-disable-next-line react/prop-types
const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="kasa-banner" />
      <div className="banner_dark"></div>
      <span className="banner_txt">{text}</span>
    </div>
  );
};

export default Banner;
