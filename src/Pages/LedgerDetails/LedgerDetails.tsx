import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetLedgerBetDetailsMutation } from "../../store/service/userServices/userServices";
import MatchBetsTable from "./MatchBetsTable";
import RejectedBetsTable from "./RejectedBetsTable";
import SessionBetsTable from "./SessionBetsTable";
import BackToMainMenu from "../../Common/BackToMainMenu";
import "./style.scss";


const SummaryBlock = ({ title, value }: { title: string; value?: number }) => {
  const isPositive = value && value > 0;
  return (
    <div className="my-ledger-data-table">
      <table width="100%" border={0} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td
              height={25}
              align="center"
              className="TeamCombo"
              style={{
                background: "linear-gradient(var(--primary-color) 0, #000 100%)",
              }}
            >
              <p
                style={{
                  color: "#FFF",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 0,
                }}
              >
                {title}
              </p>
            </td>
          </tr>
          <tr>
            <td
              height={25}
              align="center"
              className="TeamCombo"
              style={{ backgroundColor: "#fff" }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 0,
                  color: isPositive ? "green" : "red",
                }}
              >
                {value}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const LedgerDetails = () => {
  const { id } = useParams();
  const [betTrigger, { data: ledgerBetData, isLoading }] =
    useGetLedgerBetDetailsMutation();

  useEffect(() => {
    betTrigger({
      matchId: Number(id) || 0,
    });
  }, [id]);

  const matchWon = ledgerBetData?.data?.matchWon;
  const fancyWon = ledgerBetData?.data?.sessionWon;
  const totalCommission = ledgerBetData?.data?.totalCommission;
  const totalWon = ledgerBetData?.data?.totalWon;
  const matchBets = ledgerBetData?.data?.matchBets || [];
  const sessionBets = ledgerBetData?.data?.sessionBets || [];
  const rejectedBets =
    ledgerBetData?.data?.rejectedBets ||
    ledgerBetData?.data?.rejectBets ||
    ledgerBetData?.data?.rejected ||
    [];
  const matchTitle =
    ledgerBetData?.data?.matchName ||
    ledgerBetData?.data?.eventName ||
    ledgerBetData?.data?.match ||
    "";
  return (
    <>
      <div className="container-fluid ledger-details-page" style={{ paddingTop: 100 }}>
        <div className="ledger-details-header">
          <span>MY LEDGER DETAILS</span>
          {matchTitle ? <span>({matchTitle})</span> : null}
        </div>
        
        <form name="BetPlayer">
          {matchBets.length > 0 && (
            <MatchBetsTable
              matchBets={matchBets}
              wonBy={ledgerBetData?.data?.wonBy}
              matchName={matchTitle}
            />
          )}
          {sessionBets.length > 0 && (
            <SessionBetsTable sessionBets={sessionBets} />
          )}
          {rejectedBets.length > 0 && (
            <RejectedBetsTable rejectedBets={rejectedBets} />
          )}
          <div>
            <SummaryBlock title="Match Plus Minus" value={matchWon} />
            <SummaryBlock title="Fancy Plus Minus" value={fancyWon} />
            <SummaryBlock title="Total Commission" value={totalCommission} />
            <SummaryBlock title="Net Plus Minus" value={totalWon} />
          </div>

          <BackToMainMenu to="/main/ledger" className="mt-4 w-100" />
        </form>
      </div>
    </>
  );
};

export default LedgerDetails;
