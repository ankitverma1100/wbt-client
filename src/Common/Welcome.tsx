import { useState, useEffect } from "react";
import "./style.scss";

interface Props {
  handleClose: () => void;
}

/* ---------- Arrow SVG (Ant Design) ---------- */
const ArrowIcon = ({ open }: { open: boolean }) => (
  <span
    role="img"
    aria-label={open ? "expanded" : "collapsed"}
    className="anticon anticon-right ant-collapse-arrow"
  >
    <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" ><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
  </span>
);

/* ---------- Check Circle SVG (Ant Design) ---------- */
const CheckIcon = () => (
  <span
    role="img"
    aria-label="check-circle"
    className="anticon anticon-check-circle"
  >
    <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1em" height="1em" fill="#52c41a" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
  </span>
);
const CloseIcon = () => (
  <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
);

/* ---------- MAIN COMPONENT ---------- */
const Welcome = ({ handleClose }: Props) => {
  const [open, setOpen] = useState({ hi: false, en: false });
  

  const toggle = (key: "hi" | "en") => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, []);


  return (
    <div
      className="modal rule-modal show fade"
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      style={{ display: "block" }}
    >
      {/* Overlay */}
      <div className="overlay" onClick={handleClose} />

      <div className="modal-dialog" role="document">
        <div className="modal-content ant-modal-content">
          {/* Close */}

          {/* Header */}
          <div className="ant-modal-header">
            <div className="ant-modal-title">WBT99.CO Games Rules</div>
          <button
            type="button"
            aria-label="Close"
            className="ant-modal-close"
            onClick={handleClose}
          >
            <CloseIcon/>
          </button>
          </div>

          {/* Body */}
          <div className="ant-modal-body">
            <div className="ant-collapse ant-collapse-ghost ant-collapse-icon-position-start">
              {/* Hindi Rules */}
              <div
                className={`ant-collapse-item ${
                  open.hi ? "ant-collapse-item-active" : ""
                }`}
              >
                <div
                  className="ant-collapse-header"
                  role="button"
                  aria-expanded={open.hi}
                  onClick={() => toggle("hi")}
                >
                  <div className="ant-collapse-expand-icon">
                    <ArrowIcon open={open.hi} />
                  </div>
                  <span className="ant-collapse-header-text">
                    Hindi Rules
                  </span>
                </div>

                <div
                  className={`ant-collapse-content ${
                    open.hi
                      ? "ant-collapse-content-active"
                      : "ant-collapse-content-hidden"
                  }`}
                >
                  <div className="ant-collapse-content-box">
                    <ul className="ant-list-items">
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                        किसी भी इवेंट या खेल का परिणाम गलती से दर्ज होने पर, उसे सही करने का अधिकार हमेशा रहेगा। परिणाम दर्ज होने के बाद से 48 से 72 घंटों के अंदर या कभी भी उस खेल या इवेंट का सही परिणाम दर्ज किया जा सकता है।
                      </li>
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                       यदि ग्राहक घोषित ग़लत रिजल्ट के द्वारा बड़े हुये कॉइन का यूज़ करता है तो रिजल्ट सही किए जाने पर इस्तेमाल किए गए कॉइन का भुगतान ग्राहक को ख़ुद करना पड़ेगा, या ग्राहक की आईडी से कॉइन माइनस या काट लिए जाएँगे यदि ग्राहक इन शर्तों से सहमत होता है, तो ही वह इस साइट पर बैटिंग कर सकता है।
                      </li>
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                       इस स्थिति में बाद में किसी भी प्रकार का विवाद न तो एजेंट के साथ और न ही एजेंट के द्वारा कंपनी के साथ स्वीकार किया जाएगा। यदि एजेंट ने इन शर्तों को पहले ही अपने ग्राहक को बता दे , बाद में किसी भी प्रकार का तर्क या विवाद स्वीकार नहीं किया जाएगा।
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* English Rules */}
              <div
                className={`ant-collapse-item ${
                  open.en ? "ant-collapse-item-active" : ""
                }`}
              >
                <div
                  className="ant-collapse-header"
                  role="button"
                  aria-expanded={open.en}
                  onClick={() => toggle("en")}
                >
                  <div className="ant-collapse-expand-icon">
                    <ArrowIcon open={open.en} />
                  </div>
                  <span className="ant-collapse-header-text">
                    English Rules
                  </span>
                </div>

                <div
                  className={`ant-collapse-content ${
                    open.en
                      ? "ant-collapse-content-active"
                      : "ant-collapse-content-hidden"
                  }`}
                >
                  <div className="ant-collapse-content-box">
                    <ul className="ant-list-items">
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                       If any event or game is entered in error, the user shall always have the right to correct it. The correct result for the game or event may be entered within 48 to 72 hours after the result has been entered or at any time.
                      </li>
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                       If the Client uses the coins added by a wrong result declared, then the Client will have to pay for the coins used when the result is corrected, or the coins will be minused or deducted from the Client's ID. The Client can bet on this site only if he agrees to these terms.
                      </li>
                      <li className="ant-list-item ant-list-item-no-flex">
                        <CheckIcon />
                        In this case, no dispute of any kind will be entertained later either with the Agent or by the Agent with the Company. If the Agent has already informed these conditions to its Client, no argument or dispute of any kind will be entertained later.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <img src="/img/aviator-banner.jpeg" alt="" style={{borderRadius:"12px",marginTop:"10px"}} />
          </div>

          {/* Footer */}
          <div className="ant-modal-footer">
            <button
              type="button"
              className="ant-btn ant-btn-primary ant-btn-lg"
              onClick={handleClose}
            >
              I Agree to Terms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
