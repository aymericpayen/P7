import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
const Card = ({ id, title, image }) => {
  return (
    <NavLink to={`/logement/${id}/#`}>
      <div className="card" id={id}>
        <img className="card-image" src={image} alt={"appartement" + title} />
        <div className="card-darker"></div>
        <span className="card-title">{title}</span>
      </div>
    </NavLink>
  );
};

export default Card;
