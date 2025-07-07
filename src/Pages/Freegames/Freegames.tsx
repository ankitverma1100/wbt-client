import React from "react";

const Freegames = () => {
  const [showGame, setShowGame] = React.useState(false);
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          onClick={() => setShowGame(!showGame)}
          src="/img/demopic.jpg"
          alt="demo"
          className="w-100"
        />
      </div>
      {showGame && (
        <div className="d-flex align-items-center">
          <iframe
            id="gameIframe"
            src="https://doodlecricket.github.io/#/"
            style={{
              width: "100%",
              height: "300px",
              display: "block",
            }}></iframe>
        </div>
      )}
    </>
  );
};

export default Freegames;
