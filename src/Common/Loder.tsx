

const Loder = () => {
  return (
    <div
      className="gx-bg-flex gx-align-items-center gx-justify-content-center"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}>
      <div className="pulseLoader rounded-full" />
    </div>
  );
};

export default Loder;
