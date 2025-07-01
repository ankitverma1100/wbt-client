import { Col } from "antd";

const Bookmaker = () => {
  return (
    <Col xs={24} sm={24} className="gx-px-0 gx-py-0 gx-mx-0 gx-my-0">
      <div
        className="ant-table-wrapper gx-w-100 custom-ant-table gx-mx-0 gx-my-0"
        style={{ marginTop: 16 }}>
        <div className="ant-spin-nested-loading">
          <div className="ant-spin-container">
            <div className="ant-table ant-table-small ant-table-bordered ant-table-scroll-horizontal">
              <div className="ant-table-container">
                <div
                  className="ant-table-content"
                  style={{ overflow: "auto hidden" }}>
                  <table
                    style={{
                      width: "auto",
                      minWidth: "100%",
                      tableLayout: "auto",
                    }}>
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
                            <span className="gx-d-none gx-d-lg-block">
                              Bookmaker
                            </span>
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
                        aria-hidden="true"
                        className="ant-table-measure-row"
                        style={{ height: 0, fontSize: 0 }}>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                        <td style={{ padding: 0, border: 0, height: 0 }}>
                          <div style={{ height: 0, overflow: "hidden" }}>
                            &nbsp;
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key={0}
                        className="ant-table-row ant-table-row-level-0 no-hover">
                        <td className="ant-table-cell">
                          <div className="gx-bg-flex gx-">
                            <div className=" gx-font-weight-semi-bold gx-text-uppercase">
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
                          <div className="gx-font-weight-semi-bold gx-text-blue gx-fs-lg gx-text-uppercase">
                            0
                          </div>
                        </td>
                        <td
                          className="ant-table-cell"
                          style={{ textAlign: "center" }}>
                          <div
                            className="gx-font-weight-semi-bold  gx-fs-lg gx-text-capitalize"
                            style={{ color: "rgb(227, 68, 103)" }}>
                            0
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-row-key={1}
                        className="ant-table-row ant-table-row-level-0 no-hover">
                        <td className="ant-table-cell">
                          <div className="gx-bg-flex gx-">
                            <div className=" gx-font-weight-semi-bold gx-text-uppercase">
                              INDIA W
                            </div>
                            <div className="gx-font-weight-semi-bold gx-text-light-grey ">
                              0
                            </div>
                          </div>
                        </td>
                        <td
                          className="ant-table-cell"
                          style={{ textAlign: "center" }}>
                          <div className="gx-font-weight-semi-bold gx-text-blue gx-fs-lg gx-text-uppercase">
                            0
                          </div>
                        </td>
                        <td
                          className="ant-table-cell"
                          style={{ textAlign: "center" }}>
                          <div
                            className="gx-font-weight-semi-bold  gx-fs-lg gx-text-capitalize"
                            style={{ color: "rgb(227, 68, 103)" }}>
                            0
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Bookmaker;
