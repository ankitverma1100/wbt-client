export default function OpenBets() {
  return (
    <div className="game-content">
      <div className="open-bets-container">
        <div className="open-bets-title">OPEN BETS</div>

        <div className="open-bets-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>RUNNER NAME</th>
                <th>BET PRICE</th>
                <th>BET VALUE</th>
                <th>BET AMOUNT</th>
                <th>BET PROFIT</th>
                <th>BET LOSS</th>
                <th>BET STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state (API data later) */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
