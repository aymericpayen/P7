/* eslint-disable react/prop-types */
const Host = ({ host }) => {
  const firstName = host.name.split(" ")[0];
  const lastName = host.name.split(" ")[1];
  return (
    <>
      <div className="host-information">
        <div className="host-information_names">
          <span className="host-name">{firstName}</span>
          <span className="host-name">{lastName}</span>
        </div>
        <img
          className="host-information_avatar"
          src={host.picture}
          alt="host"
        />
      </div>
    </>
  );
};

export default Host;
