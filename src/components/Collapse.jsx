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
        <div className="collapse-dropdown_content">
          {!nextLine ? (
            <p>{content}</p>
          ) : (
            content.map((item, key) => (
              <>
                <p key={key}>{item}</p>
              </>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
