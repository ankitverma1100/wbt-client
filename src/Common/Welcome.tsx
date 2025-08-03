import "./style.scss";

interface Props {
  handleClose: () => void;
}

const Welcome = ({ handleClose }: Props) => {
  return (
    <>
      <div
        className="modal show fade"
        role="dialog"
        tabIndex={-1}
        id="welcomeModal"
        aria-modal="true"
        style={{ display: "block" }}>
        <div className="overlay" />

        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ border: "none ", borderRadius: 0 }}>
            <div
              className="custom-modal-header modal-header"
              style={{ background: "#7d5c0e", color: "#fff" }}>
              <h5 className="modal-title text-bold">Welcome to Ant</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true" onClick={handleClose}>
                  ×
                </span>
              </button>
            </div>
            <div className="custom-modal-text modal-body">
              <h2>प्रिय ग्राहक,</h2>
              <p>
                आपसे अनुरोध है हमारी कोई डुप्लीकेट साइट नही है हमारी आधिकारिक
                साइट 'Antpro.in' से लॉगिन करें। लॉगइन करने से पहले साइट का नाम
                जरूर देख लें। आपके समर्थन के लिए धन्यवाद। टीम antpro
              </p>
              <h2>Dear Client,</h2>
              <p>
                We don't have any duplicate site , You are requested to login
                with our official site Antpro.in. I only. Please check the site
                name before you login. Thanks for your support. Team antpro
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm cancelbtn"
                onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
