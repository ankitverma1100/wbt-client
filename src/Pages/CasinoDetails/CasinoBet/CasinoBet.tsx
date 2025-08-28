import { useEffect } from "react";
import { useGetIpfyQuery } from "../../../store/service/odds/oddsServices";
import { useGetCasinoBetPlacedMutation } from "../../../store/service/userServices/userServices";
import { toast } from "react-toastify";
import moment from "moment";

interface Props {
  setBetState: any;
  betState: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
}

const CasinoBet = ({
  setBetState,
  betState,
  setOpen,
  setTimer,
  timer,
}: Props) => {
  var curr = new Date();
  const pTime = moment(curr).format("YYYY-MM-DD HH:mm:ss.SSS");
  const [trigger, { data, isLoading }] = useGetCasinoBetPlacedMutation();
  const { data: userIp } = useGetIpfyQuery();

  const handleStakeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value) || 0;
    setBetState((prev: any) => ({
      ...prev,
      stake: value,
    }));
  };

  const handleStakeButtonClick = (amount: number) => {
    setBetState((prev: any) => ({
      ...prev,
      stake: amount,
    }));
  };

  const handleCasinoBetPlaced = () => {
    if (!betState?.stake || betState?.stake < 100) {
      toast.error(
        "Amount can not be less than casino Min Amount 100 in casino"
      );
      return;
    }
    trigger({
      ...betState,
      userIp: userIp?.ip,
      placeTime: pTime,
      deviceInfo: {
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        browser: "Chrome",
        device: "Macintosh",
        deviceType: "desktop",
        os: "Windows",
        os_version: "windows-10",
        browser_version: "108.0.0.0",
        orientation: "landscape",
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (!data?.status) {
        toast.error(data?.message);
        setBetState((prev: any) => ({
          ...prev,
          stake: "",
        }));
      } else {
        setBetState((prev: any) => ({
          ...prev,
          stake: "",
        }));

        toast.success(data?.message);
        setOpen(false);
      }
    }
  }, [data]);

  useEffect(() => {
    const timers = setTimeout(() => {
      if (timer > 0) {
        setTimer((o) => o - 1);
      } else {
        setOpen(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timers);
    };
  }, [timer]);

  const handleClearInput = () => {
    setBetState((prev: any) => ({
      ...prev,
      stake: "",
    }));
  };

  const handleClose = () => {
    setOpen(false);
    setBetState((prev: any) => ({
      ...prev,
      stake: "",
    }));
  };

  return (
    <>
      <div
        className="gx-d-lg-none gx-d-flex gx-justify-content-between gx-align-items-center gx-py-1"
        style={{ gap: 2, padding: "0px 10px" }}>
        <div className="gx-fs-sm gx-font-weight-bold">Amount</div>
        <div
          className="gx-w-50"
          style={{ border: "1px solid rgb(201, 157, 30)" }}>
          <input
            type="text"
            autoCapitalize="none"
            className="gx-w-100 gx-black-text gx-border-dark gx-fs-md gx-px-1"
            placeholder="0"
            name="stake"
            list="stake"
            inputMode="numeric"
            value={betState?.stake || ""}
            onChange={handleStakeChange}
            style={{ backgroundColor: "rgb(233, 233, 233)" }}
          />
          <datalist id="stake" className="gx-bg-black gx-white-text">
            <option value="100" />
            <option value="500" />
            <option value="1000" />
            <option value="2000" />
            <option value="5000" />
            <option value="10000" />
            <option value="25000" />
            <option value="50000" />
            <option value="100000" />
            <option value="200000" />
            <option value="300000" />
            <option value="500000" />
          </datalist>
        </div>
        <div
          className="gx-d-flex gx-justify-content-end gx-align-items-center gx-fs-md"
          style={{ gap: 2 }}>
          <div className="gx-bg-dark gx-text-white gx-py-1 gx-px-2">
            <div style={{ position: "relative", width: 20, height: 20 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                }}>
                {timer}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="ant-btn ant-btn-default gx-bg-grey gx-text-white  gx-justify-content-center gx-rounded-xxl gx-mb-0 gx-px-3"
            onClick={isLoading ? undefined : handleCasinoBetPlaced}
            disabled={isLoading}>
            <div className=" gx-bg-flex gx-align-items-center  gx-justify-content-center">
              <div className="gx-px-2">
                Done{" "}
                {isLoading && (
                  <div className="spinner-border" role="status"></div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="gx-py-1 gx-d-lg-block gx-d-none" id="section1">
        <div
          className="gx-p-1"
          style={{ border: "2px solid rgb(201, 157, 30)", borderRadius: 5 }}>
          <div className="">
            <div className="gx-d-flex gx-justify-content-between gx-align-items-center">
              <div className="gx-text-black gx-fs-md gx-font-weight-bold gx-text-center gx-w-100 gx-text-nowrap">
                {betState?.nation} :
              </div>
              <span className="gx-w-100 gx-text-left">
                RATE : {betState?.odds?.toFixed(2)}
              </span>
              <div className="gx-bg-dark gx-rounded-circle gx-text-white gx-p-2">
                <div style={{ position: "relative", width: 20, height: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%",
                    }}>
                    {timer}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="gx-d-flex gx-justify-content-center gx-align-items-center"
              style={{ gap: 5 }}>
              <span className="gx-text-black gx-fs-lg gx-font-weight-bold">
                AMOUNT
              </span>
              <input
                type="number"
                className="gx-px-1 gx-ml-2"
                placeholder="0"
                value={betState?.stake || ""}
                onChange={handleStakeChange}
                style={{ border: "2px solid rgb(43, 19, 45)" }}
              />
              <button
                type="button"
                className="ant-btn ant-btn-default gx-bg-grey gx-text-white gx-rounded-xxl gx-mb-0 gx-px-5"
                onClick={isLoading ? undefined : handleCasinoBetPlaced}
                disabled={isLoading}>
                <div className=" gx-bg-flex gx-align-items-center  gx-justify-content-center">
                  <div className="gx-px-2">
                    Done{" "}
                    {isLoading && (
                      <div className="spinner-border" role="status"></div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="gx-text-center gx-my-2">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 5,
              }}>
              {[
                100, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 200000,
                300000, 500000,
              ].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className="ant-btn ant-btn-default  gx-text-white gx-font-weight-bold gx-mb-0 gx-mr-0"
                  style={{
                    backgroundColor: "rgb(97, 172, 222)",
                    borderRadius: 6,
                  }}
                  onClick={() => handleStakeButtonClick(amount)}>
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 5,
            }}>
            <button
              onClick={handleClearInput}
              type="button"
              className="ant-btn ant-btn-danger gx-mb-0">
              <span>Clear Input</span>
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="ant-btn ant-btn-danger gx-mb-0">
              <span>Clear Close</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasinoBet;
