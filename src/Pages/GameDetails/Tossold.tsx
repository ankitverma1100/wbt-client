
const Toss = () => {
  return (
    <div
      className="ant-table-wrapper gx-w-100 gx-mx-0 gx-my-0"
      style={{ marginTop: 16, width: "100%" }}>
      <div className="ant-table ant-table-small ant-table-bordered">
        <div className="ant-table-container">
          <div className="ant-table-content">
            <table style={{ tableLayout: "auto", width: "100%" }}>
              <colgroup>
                <col style={{ width: "60%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <thead className="ant-table-thead">
                <tr>
                  <th className="ant-table-cell">
                    <div
                      className="gx-bg-flex gx-justify-content-between minMax"
                      style={{ display: "flex" }}>
                      <span>Toss Data</span>
                      <span style={{ textWrap: "nowrap" }}>
                        Min: 100 Max: 200000
                      </span>
                    </div>
                  </th>
                  <th
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    Lagai
                  </th>
                  <th
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    Khai
                  </th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                <tr
                  data-row-key={0}
                  className="ant-table-row ant-table-row-level-0">
                  <td className="ant-table-cell">
                    <div className="gx-bg-flex gx-justify-content-between">
                      <div className=" gx-font-weight-semi-bold ">
                        ENGLAND W
                      </div>
                      <div className="gx-font-weight-semi-bold gx-text-light-grey ">
                        0
                      </div>
                    </div>
                  </td>
                  <td
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    <div className=" gx-bg-flex gx-text-blue gx-flex-column">
                      <span className="gx-font-weight-semi-bold">95</span>
                      <span className="gx-fs-xs">100</span>
                    </div>
                  </td>
                  <td
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    <div
                      className="  gx-bg-flex gx-flex-column"
                      style={{ color: "rgb(227, 68, 103)" }}>
                      <span className="gx-font-weight-semi-bold">0</span>
                      <span className="gx-fs-xs">100</span>
                    </div>
                  </td>
                </tr>
                <tr
                  data-row-key={1}
                  className="ant-table-row ant-table-row-level-0">
                  <td className="ant-table-cell">
                    <div className="gx-bg-flex gx-justify-content-between">
                      <div className=" gx-font-weight-semi-bold ">INDIA W</div>
                      <div className="gx-font-weight-semi-bold gx-text-light-grey ">
                        0
                      </div>
                    </div>
                  </td>
                  <td
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    <div className=" gx-bg-flex gx-text-blue gx-flex-column">
                      <span className="gx-font-weight-semi-bold">95</span>
                      <span className="gx-fs-xs">100</span>
                    </div>
                  </td>
                  <td
                    className="ant-table-cell"
                    style={{ textAlign: "center" }}>
                    <div
                      className="  gx-bg-flex gx-flex-column"
                      style={{ color: "rgb(227, 68, 103)" }}>
                      <span className="gx-font-weight-semi-bold">0</span>
                      <span className="gx-fs-xs">100</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toss;
