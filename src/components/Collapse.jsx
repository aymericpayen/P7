/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content, nextLine = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-dropdown">
      <div onClick={toggle} className="collapse-dropdown_container">
        <h1>{title}</h1>
        {!isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {isOpen && (
        <div className="collapse-dropdown_content slide-down">
          {!nextLine ? (
            <p>{content}</p>
          ) : (
            <ul>
              {content.map((item) => (
                <li key={`eq-${item}`}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
