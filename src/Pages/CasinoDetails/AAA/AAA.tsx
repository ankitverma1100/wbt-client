import { Col, Row } from "antd";
import { LockOutlined } from "@ant-design/icons";

interface AAAProps {
  t1: any;
  odds: any;
  setBetState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToBet: React.RefObject<HTMLDivElement | null>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsBetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AAA = ({
  t1,
  odds,
  setBetState,
  setOpen,
  scrollToBet,
  setTimer,
  setIsBetModal,
}: AAAProps) => {
  const t2 = odds?.t2 || [];

  const handleClick = (t2Data: any, isBack: boolean) => {
    setBetState &&
      setBetState((prev: any) => ({
        ...prev,
        nation: t2Data?.nation,
        casinoName: 2,
        isBack,
        odds: isBack ? Number(t2Data?.b1) : Number(t2Data?.l1),
        selectionId: t2Data?.sid,
        colorName: "back",
        matchId: "56",
      }));
    setOpen(true);
    scrollToBet?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    setIsBetModal(true);
    setTimer(10);
  };

  return (
    <>
      <Row
        justify="center"
        className="gx-w-100 gx-text-center gx-border-dark gx-border-2 gx-mt-1 gx-mx-1"
        style={{ marginLeft: "-4px", marginRight: "-4px", rowGap: 8 }}>
        <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
          <div className="gx-py-2 gx-w-100">
            <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
              <span>A.</span>
              {t2?.[0]?.nation}
            </div>
            <div className="gx-fs-md gx-font-weight-semi-bold gx-w-100 gx-bg-flex">
              {["rgb(114, 187, 239)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  <div
                    className="text-[16px] font-[400] leading-4"
                    onClick={() => handleClick(t2?.[0], true)}>
                    {t2?.[0]?.gstatus == "ACTIVE" ? t2?.[0]?.b1 : 0}
                  </div>
                  {t2?.[0]?.gstatus != "ACTIVE" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {["rgb(250, 169, 186)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  {t2?.[0]?.gstatus == "ACTIVE" ? (
                    <div
                      className="text-[16px] font-[400] leading-4"
                      onClick={() => handleClick(t2?.[0], false)}>
                      {t2?.[0]?.gstatus == "ACTIVE" ? t2?.[0]?.l1 : 0}
                    </div>
                  ) : (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className="gx-text-green-0 flex justify-center items-center text-[16px] font-[500]"
              style={{ color: t2[0]?.pnl > 0 ? "green" : "red" }}>
              {t2[0]?.pnl}
            </div>
          </div>
        </Col>
        <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
          <div className="gx-py-2 gx-w-100">
            <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
              <span>B.</span>
              {t2?.[1]?.nation}
            </div>
            <div className="gx-fs-md gx-font-weight-semi-bold gx-w-100 gx-bg-flex">
              {["rgb(114, 187, 239)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  <div
                    className="text-[16px] font-[400] leading-4"
                    onClick={() => handleClick(t2?.[1], true)}>
                    {" "}
                    {t2?.[1]?.gstatus == "ACTIVE" ? t2[1]?.b1 : "0.00"}
                  </div>
                  {t2?.[1]?.gstatus != "ACTIVE" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {["rgb(250, 169, 186)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  <div
                    className="text-[16px] font-[400] leading-4"
                    onClick={() => handleClick(t2?.[1], false)}>
                    {" "}
                    {t2?.[1]?.gstatus == "ACTIVE" ? t2[1]?.l1 : "0.00"}
                  </div>
                  {t2?.[1]?.gstatus != "ACTIVE" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className="gx-text-green-0 flex justify-center items-center text-[16px] font-[500]"
              style={{ color: t2[1]?.pnl > 0 ? "green" : "red" }}>
              {t2[1]?.pnl}
            </div>
          </div>
        </Col>
        <Col xs={8} style={{ paddingLeft: 4, paddingRight: 4 }}>
          <div className="gx-py-2 gx-w-100">
            <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
              <span>C.</span> {t2?.[2]?.nation}
            </div>
            <div className="gx-fs-md gx-font-weight-semi-bold gx-w-100 gx-bg-flex">
              {["rgb(114, 187, 239)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  <div
                    className="text-[16px] font-[400] leading-4"
                    onClick={() => handleClick(t2?.[2], true)}>
                    {" "}
                    {t2?.[2]?.gstatus == "ACTIVE" ? t2?.[2]?.b1 : "0.00"}
                  </div>
                  {t2?.[2]?.gstatus != "ACTIVE" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {["rgb(250, 169, 186)"].map((bgColor, index) => (
                <div
                  key={index}
                  className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative"
                  style={{ backgroundColor: bgColor }}>
                  <div
                    className="text-[16px] font-[400] leading-4"
                    onClick={() => handleClick(t2?.[2], false)}>
                    {" "}
                    {t2?.[2]?.gstatus == "ACTIVE" ? t2?.[2]?.l1 : "0.00"}
                  </div>
                  {t2?.[2]?.gstatus != "ACTIVE" && (
                    <div
                      className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                      style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                      <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                        <LockOutlined
                          style={{ fontSize: 16, color: "white" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className="gx-text-green-0 flex justify-center items-center text-[16px] font-[500]"
              style={{ color: t2[2]?.pnl > 0 ? "green" : "red" }}>
              {t2[2]?.pnl}
            </div>
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        className="gx-w-100 gx-text-center gx-border-dark gx-border-2 gx-mt-1 gx-mx-1"
        style={{ marginLeft: "-4px", marginRight: "-4px", rowGap: 8 }}>
        {[["Even"], ["Odd"]].map(([label], index) => {
          const data = t2.find((item: any) => item.nation === label);
          return (
            <Col xs={6} key={label} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-py-2 gx-w-100">
                <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
                  <span>0</span>
                </div>
                <div
                  className="gx-fs-md gx-text-white gx-font-weight-semi-bold gx-w-100 gx-bg-flex"
                  style={{ height: 33 }}>
                  <div className="gx-w-100 gx-mx-1 gx-py-2 gx-position-relative gx-bg-grey">
                    <div onClick={() => handleClick(data, true)}>{label}</div>
                    {data?.gstatus !== "ACTIVE" && (
                      <div
                        className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                        style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                        <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                          <LockOutlined
                            style={{ fontSize: 16, color: "white" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="gx-text-green-0"
                  style={{ color: data?.pnl > 0 ? "green" : "red" }}>
                  {data?.pnl}
                </div>
              </div>
            </Col>
          );
        })}

        {[
          { color: "red", icons: ["heart", "triangle"] },
          { color: "black", icons: ["drop", "dropFilled"] },
        ].map((item, index) => {
          const data = t2.find(
            (nat: any) => nat?.nation?.toLowerCase() === item.color
          );

          return (
            <Col xs={6} key={index} style={{ paddingLeft: 4, paddingRight: 4 }}>
              <div className="gx-py-2 gx-w-100">
                <div className="gx-fs-md gx-font-weight-semi-bold gx-py-1">
                  <span>0</span>
                </div>
                <div
                  className="gx-fs-md gx-font-weight-semi-bold gx-w-100 gx-bg-flex gx-justify-content-center gx-align-content-center"
                  style={{ height: 33 }}>
                  <div
                    className="gx-mx-1 gx-w-100 gx-py-2 gx-position-relative gx-bg-grey"
                    style={{ color: item.color }}
                    onClick={() => handleClick(data, true)}>
                    <span className="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
                      </svg>
                    </span>
                    <span className="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        version="1.1"
                        viewBox="0 0 16 16"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0l-5 8 5 8 5-8z" />
                      </svg>
                    </span>

                    {data?.gstatus !== "ACTIVE" && (
                      <div
                        className="gx-position-absolute gx-top-0 gx-w-100 gx-cursor-pointer gx-h-100"
                        style={{ background: "rgba(0, 0, 0, 0.7)" }}>
                        <div className="gx-bg-flex gx-justify-content-center gx-align-content-center gx-py-2">
                          <LockOutlined
                            style={{ fontSize: 16, color: "white" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="gx-text-green-0 flex justify-center items-center text-[16px] font-[500]"
                  style={{ color: data?.pnl > 0 ? "green" : "red" }}>
                  {data?.pnl}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AAA;
