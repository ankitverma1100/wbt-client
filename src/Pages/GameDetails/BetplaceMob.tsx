/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface Props {
  amountInputRef: React.RefObject<HTMLInputElement | null>;
  placeBetData: any;
  setPlaceBetData: React.Dispatch<any>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  trigger: any;
  isLoading: boolean;
}

const BetplaceMob = ({
  amountInputRef,
  placeBetData,
  setPlaceBetData,
  timer,
  setTimer,
  trigger,
  isLoading,
}: Props) => {
  const { Option } = Select;
  useEffect(() => {
    const timers = setTimeout(() => {
      if (timer > 0) {
        setTimer((o) => o - 1);
      } else {
        setPlaceBetData({} as any);
        if (amountInputRef.current) {
          amountInputRef.current.value = "";
        }
      }
    }, 1000);
    return () => clearInterval(timers);
  }, [timer]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPlaceBetData((prev: any) => ({
      ...prev,
      stake: value,
    }));
  };
  const handleChange = (value: any) => {
    setPlaceBetData((prev: any) => ({
      ...prev,
      stake: value,
    }));
  };
  const handleStackChange = (event: number) => {
    setPlaceBetData((prev: any) => ({
      ...prev,
      stake: event,
    }));
  };

  const handleBetPlaced = () => {
    trigger(placeBetData);
  };


  return (
    <>
      {placeBetData.odds && (
        <table
          width="100%"
          cellSpacing={2}
          cellPadding={2}
          border={0}
          className="table mb-0 bg-white res-table"
          id="placeBetTable">
          <tbody>
            <tr style={{ marginInline: "12px" }} className="hide-desk">
              <td
                style={{
                  // textAlign: "center",
                  background: "#7d5c0e",
                  color: "#fff",
                  fontSize: "14px",
                }}
                colSpan={5}>
                <div style={{ padding: "0px 14px" }}>
                  Type:{" "}
                  <span style={{ color: "#f4ad08" }}>{placeBetData?.mode}</span>{" "}
                  {placeBetData?.odds} [{placeBetData?.priceValue}]
                </div>
                <div style={{ padding: "0px 14px" }}>
                  Fancy: {placeBetData?.name}
                </div>
              </td>
            </tr>
            <tr>
              <td
                className="FontTextWhite10px  mob-hide"
                width="15%"
                style={{
                  verticalAlign: "baseline",
                  color: "#212529 ",
                  border: "none ",
                  fontSize: "18px ",
                  backgroundColor: "#e9e9e9",
                }}
                height={25}
                align="center">
                <span id="market_team">{placeBetData.name}</span>
              </td>
              <td
                className="FontTextWhite10px  mob-hide"
                width="75%"
                style={{
                  verticalAlign: "baseline",
                  color: "#212529 ",
                  border: "none ",
                  fontSize: "18px ",
                  backgroundColor: "#e9e9e9",
                }}
                height={25}
                align="center"
                id="bet_rate">
                Rate: {placeBetData?.odds} ({placeBetData.mode})
              </td>
              <td
                colSpan={3}
                className="FontTextWhite10px  amounttab"
                style={{ background: "#E9E9E9", verticalAlign: "middle" }}>
                <b style={{ fontSize: 18, paddingLeft: 10 }}>Amount: </b>{" "}
                <input
                  ref={amountInputRef}
                  type="number"
                  name="amount"
                  value={placeBetData?.stake || ""}
                  onChange={handleAmountChange}
                  className="form-control mobile-width mb-2 mb-md-2 mr-3 mob-hide"
                  style={{ width: "50%", display: "inline-block" }}
                  id="stack_box"
                />
                <div
                  className="mr-3 desk-hide"
                  style={{
                    width: "160px",
                    marginInline: "12px",
                  }}>
                  <Select
                    showSearch
                    ref={amountInputRef}
                    value={placeBetData?.stake}
                    style={{ width: "100%", height: "35.5px" }}
                    placeholder="Enter a number or select a value"
                    optionLabelProp="label"
                    onChange={handleChange}>
                    <Option value={100} label="100">
                      100
                    </Option>
                    <Option value={500} label="500">
                      500
                    </Option>
                    <Option value={1000} label="1000">
                      1000
                    </Option>
                    <Option value={2000} label="2000">
                      2000
                    </Option>
                    <Option value={5000} label="5000">
                      5000
                    </Option>
                    <Option value={10000} label="10000">
                      10000
                    </Option>
                    <Option value={25000} label="25000">
                      25000
                    </Option>
                    <Option value={50000} label="50000">
                      50000
                    </Option>
                    <Option value={100000} label="100000">
                      100000
                    </Option>
                    <Option value={200000} label="200000">
                      200000
                    </Option>
                    <Option value={300000} label="300000">
                      300000
                    </Option>
                    <Option value={500000} label="500000">
                      500000
                    </Option>
                  </Select>
                </div>
                <span
                  className="amount-span d-md-none d-inline-block"
                  id="counterMob">
                  {timer}
                </span>
                <a
                  className="donebtn"
                  style={{
                    background: "rgb(89, 87, 255)",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    opacity: isLoading ? 0.7 : 1,
                    width: "100px",
                  }}
                  onClick={() => {
                    if (!isLoading) {
                      handleBetPlaced();
                    }
                  }}
                  type="button"
                  aria-disabled={isLoading}
                  id="cmdDone">
                  DONE
                  {isLoading && (
                    <div className="spinner-border" role="status"></div>
                  )}
                </a>
                <div className="amount-btndiv mb-1 pl-2 d-none d-md-flex">
                  <a onClick={() => handleStackChange(100)}>1H</a>
                  <a onClick={() => handleStackChange(500)}>5H</a>
                  <a onClick={() => handleStackChange(10000)}>10H</a>
                  <a onClick={() => handleStackChange(25000)}>25H</a>
                  <a onClick={() => handleStackChange(50000)}>50H</a>
                  <a className="bg-danger text-white">Clear</a>
                </div>
                <div className="amount-btndiv mb-1 pl-2 d-none d-md-flex">
                  <a onClick={() => handleStackChange(100000)}>1L</a>
                  <a onClick={() => handleStackChange(200000)}>2L</a>
                  <a onClick={() => handleStackChange(500000)}>5L</a>
                  <a onClick={() => handleStackChange(1000000)}>10L</a>
                  <a onClick={() => handleStackChange(2500000)}>25L</a>
                  <a className="bg-danger text-white" id="counter">
                    {timer}
                  </a>
                </div>
              </td>
              <td
                className="FontTextWhite10px "
                width="15%"
                style={{
                  verticalAlign: "baseline",
                  color: "#212529 ",
                  border: "none ",
                  fontSize: "18px ",
                  backgroundColor: "#e9e9e9",
                }}
                height={25}
                align="center"></td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default BetplaceMob;
