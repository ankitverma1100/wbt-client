/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBetPlacedMutation } from "../../store/service/userServices/userServices";

interface Props {
  amountInputRef: React.RefObject<HTMLInputElement | null>;
  placeBetData: any;
  setPlaceBetData: React.Dispatch<any>;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMsg: React.Dispatch<React.SetStateAction<string>>;
}

const BetplaceMob = ({
  amountInputRef,
  placeBetData,
  setPlaceBetData,
  timer,
  setTimer,
  setShow,
  setShowMsg,
}: Props) => {
  const { id } = useParams<{ id: string }>();
  const [trigger, { data: betplaceData}] =
    useBetPlacedMutation();

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
  const handleStackChange = (event: number) => {
    setPlaceBetData((prev: any) => ({
      ...prev,
      stake: event,
    }));
  };

  const handleBetPlaced = () => {
    trigger(placeBetData);
  };

  useEffect(() => {
    if (betplaceData) {
      if (betplaceData.status) {
        setShowMsg("Bet Successful");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
        setTimer(0);
        setPlaceBetData({} as any);
        if (amountInputRef.current) {
          amountInputRef.current.value = "";
        }
      } else {
        setShowMsg(betplaceData.message || "Bet Failed");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000);
        setPlaceBetData({} as any);
        if (amountInputRef.current) {
          amountInputRef.current.value = "";
        }
      }
    }
  }, [betplaceData, id]);

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
          <thead>
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
                className="FontTextWhite10px  amounttab"
                style={{ background: "#E9E9E9", verticalAlign: "middle" }}>
                <b style={{ fontSize: 18, paddingLeft: 10 }}>Amount: </b>{" "}
                <input
                  ref={amountInputRef}
                  type="number"
                  name="amount"
                  value={placeBetData?.stake || ""}
                  onChange={handleAmountChange}
                  className="form-control mobile-width mb-2 mb-md-2 mr-3"
                  style={{ width: "50%", display: "inline-block" }}
                  id="stack_box"
                />
                <span
                  className="amount-span d-md-none d-inline-block"
                  id="counterMob">
                  {timer}
                </span>
                <a
                  className="donebtn"
                  style={{
                    background: "rgb(89, 87, 255)",
                  }}
                  onClick={handleBetPlaced}
                  type="button"
                  id="cmdDone">
                  DONE
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
                width="25%"
                className="d-none d-md-table-cell"
                style={{
                  background: "#E9E9E9",
                }}
              />
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      )}
    </>
  );
};

export default BetplaceMob;
