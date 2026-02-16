import "./style.scss";
import { useEffect, useState } from "react";
import {
  useGetUserBalanceQuery,
  useUpdateRateMutation,
  useUserProfileMutation,
} from "../../store/service/userServices/userServices";
import { Link } from "react-router-dom";
import { Select, Button } from "antd";

const Profile = () => {
  const [rateValue, setRateValue] = useState<number>(0);

  const [trigger, { data: userData }] = useUserProfileMutation();
  const [updateRate, { data: updateRateInfo, isLoading }] =
    useUpdateRateMutation();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (userData?.data?.rateDifference !== undefined) {
      setRateValue(userData.data.rateDifference);
    }
  }, [userData]);

  useEffect(() => {
    if (updateRateInfo?.status) {
      trigger();
    }
  }, [updateRateInfo]);

  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
  });
  const exposure = Number(
    (userBalance as { data?: { liability?: number } } | undefined)?.data
      ?.liability ?? 0,
  );

  return (
    <main className="profile-page">
      {/* BACK BUTTON */}
      <div className="profile-back">
        <Link to="/main/dashboard">Back To Main Menu</Link>
      </div>

      {/* GRID */}
      <div className="profile-grid">
        {/* RATE INFORMATION */}
        <div className="profile-card">
          <div className="card-header">RATE INFORMATION</div>

          <div className="card-body">
            <div className="rate-section">
              <div className="rate-label">RATE DIFFERENCE:</div>

              <div className="rate-actions">
                <Select
                  value={rateValue}
                  onChange={(value) => setRateValue(value)}
                  options={[0, 1, 2, 3, 4, 5].map((n) => ({
                    value: n,
                    label: n,
                  }))}
                  style={{ width: 80 }}
                />

                <Button
                  type="primary"
                  loading={isLoading}
                  onClick={() =>
                    updateRate({ rateDifference: rateValue })
                  }
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="profile-card">
          <div className="card-header">PERSONAL INFORMATION</div>

          <div className="card-body">
            <div className="info-grid">
              <div className="info-row">
                <span>CLIENT NAME:</span>
                <strong>{userData?.data?.username}</strong>
              </div>

              <div className="info-row">
                <span>CLIENT CODE:</span>
                <strong>{userData?.data?.userId}</strong>
              </div>

              <div className="info-row">
                <span>COINS:</span>
                <strong>
                  {userBalance?.data?.balance?.toFixed(2)}
                </strong>
              </div>

              <div className="info-row">
                <span>EXPOSURE:</span>
                <strong>{exposure.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
