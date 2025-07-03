/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import "./style.scss";
import BetplaceDesk from "./BetplaceDesk";
import BetplaceMob from "./BetplaceMob";
import TvSection from "./TvSection";
import Bookmaker from "./Bookmaker";
import Toss from "./Toss";
import Session from "./Session";

const GameDetails = () => {
  return (
    // <div className="gx-main-content-wrapper main_game" style={{ marginBottom: 120 }}>
    //   <TvSection />

    //   <Row align="middle">
    //     <Col xs={24} sm={24} className="gx-col-full">
    //       <Row style={{ height: 110 }}>
    //         <iframe
    //           src="https://score.trovetown.co/socket-iframe-1/crickexpo/34466285"
    //           title="Score-I-frame"
    //           className=""
    //           style={{ width: "100%", height: "100%", border: "none" }}
    //         />
    //       </Row>
    //     </Col>
    //     <Bookmaker />
    //     <Toss />
    //     <Session />
    //   </Row>

    //   <BetplaceMob />
    //   <BetplaceDesk />
    //   <div className="gx-mb-2"></div>

    //   <Row align="middle">
    //     <Col xs={24} sm={24} className="gx-px-0 gx-py-0 gx-mx-0 gx-my-0">
    //       <div className="gx-bg-flex gx-justify-content-center gx-bg-grey gx-fs-lg gx-font-weight-semi-bold gx-text-white gx-py-1">
    //         FANCY BETS
    //       </div>
    //     </Col>
    //     <Col xs={24} sm={24} className="gx-px-0 gx-py-0 gx-mx-0 gx-my-0">
    //       <div className="gx-bg-flex gx-justify-content-center">
    //         No Data Found
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row align="middle" justify="center">
    //     <Col className=" gx-px-0 gx-py-2 gx-my-1 gx-justify-content-center">
    //       <button
    //         type="button"
    //         className="ant-btn ant-btn-default gx-bg-grey gx-text-white gx-text-uppercase gx-font-weight-semi-bold">
    //         <span>Completed Bets</span>
    //       </button>
    //     </Col>
    //   </Row>
    //   <Row align="middle" justify="center">
    //     <div className="ant-col gx-px-0 gx-py-2 gx-my-1 gx-justify-content-center">
    //       <button
    //         type="button"
    //         className="ant-btn ant-btn-default gx-my-0  gx-bg-grey gx-text-white gx-text-uppercase gx-font-weight-semi-bold ">
    //         <span>All Matches</span>
    //       </button>
    //     </div>
    //   </Row>
    // </div>
    <div className="page-body">
      {" "}
      {/*--- Content -----------*/}
      <div
        style={{ position: "absolute", top: 20, right: 0, width: "50%" }}></div>
      {/* <div className="suspended">
        <div className="vertivally-align-center">
          Please Wait{" "}
          <img
            className="spinner-img"
            src="https://antspro3.com/clientAssets/img/loading-img.gif"
          />
        </div>
      </div> */}
      <div className="position-relative userTheme bg-light">
        <div className="position-relative">
          <div
            className=""
            style={{ height: 30, background: "#7b7c7f", color: "#fff" }}>
            <marque />
          </div>
          <div className="menu" id="menu" align="center">
            <ul
              className="nav"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                background: "#7d5c0e",
              }}>
              <li className="active abc d-line-block" onclick="toggle_tv()">
                <a
                  className="active text-center"
                  style={{ background: "none", border: "none" }}>
                  <img
                    height={18}
                    width={25}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAACUCAYAAADvc9dJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThBMzYzQzBGRkI2MTFFOTk0NzNFNTE5ODU4OTc4NDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThBMzYzQkZGRkI2MTFFOTk0NzNFNTE5ODU4OTc4NDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNDREN0FGQjFDQjExRTlBNERGQjQ3N0NCRTk1NDJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUzNDREN0IwQjFDQjExRTlBNERGQjQ3N0NCRTk1NDJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qG76bAAAEJZJREFUeNrsXXmsJEUd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"
                  />{" "}
                  TV
                </a>
              </li>
              <li className="text-white d-inline-block">
                <span
                  className="fs-link blinking"
                  onclick="toggleScoreboardFS()"
                  style={{}}>
                  FS
                </span>
              </li>
              <div className="w-100" id="tvFrame" style={{ display: "none" }}>
                <iframe
                  src=""
                  title="Live Match"
                  className="match-tv"
                  id="match_iframe"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <form name="BetPlayer" method="post" action="">
          <div className="d-none1 d-sm-none1 d-md-block1 d-lg-block1">
            {/*iframe section*/}
            <iframe
              src="https://param.apigang.com/api/v3/scoreApi3.php?eventId=12558&market_id=1.231583429"
              id="score_fs"
              className="fs_match_size"
            />
            {/*min max and lagai khai table*/}
            <div className="overflow-responsive">
              <table
                width="100%"
                cellSpacing={2}
                cellPadding={2}
                border={0}
                className="table bg-white lagai_khai_tbl"
                style={{ marginBottom: "0rem " }}>
                <tbody>
                  <tr>
                    <td
                      className="FontTextWhite10px"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      width="45%"
                      valign="middle"
                      height={25}
                      align="center">
                      <small>Min : 500</small>
                      <small>Max : 100000</small>
                    </td>
                    <td
                      className="FontTextWhite10px"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      width="15%"
                      valign="middle"
                      align="center">
                      LAGAI
                    </td>
                    <td
                      className="FontTextWhite10px"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      width="15%"
                      valign="middle"
                      align="center">
                      KHAI
                    </td>
                    <td
                      className="FontTextWhite10px"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      width="15%"
                      valign="middle"
                      align="center">
                      POS.
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="FontTextBlue dsk-visible"
                      style={{ verticalAlign: "middle", background: "#fff" }}
                      valign="middle"
                      align="center">
                      <span
                        className="FontTextBlue"
                        style={{
                          verticalAlign: "middle",
                          display: "flex",
                          fontWeight: 400,
                          paddingLeft: 10,
                        }}>
                        Southern Brave
                        <br /> <span style={{ color: "#f00" }} />
                      </span>
                    </td>
                    <td
                      className="FontTextBlue mobi-visible"
                      style={{ verticalAlign: "middle" }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="left">
                      {/*<span class="FontTextBlue" style="vertical-align:middle;display:flex;font-weight:400;padding-left:10px;">Southern Brave - <span style="color:#f00;"></span> <span id="PositionMt562" style="color:#000;vertical-align:middle;color:#f00;">0.00</span></span>*/}
                      <span
                        className="FontTextBlue"
                        style={{
                          verticalAlign: "middle",
                          display: "flex",
                          fontWeight: 400,
                          paddingLeft: 10,
                        }}>
                        Southern Brave{" "}
                      </span>
                    </td>
                    <td
                      style={{ verticalAlign: "middle", backgroundColor: "#" }}
                      valign="middle"
                      bgcolor="#FFF"
                      color="green"
                      align="center">
                      <input
                        type="button"
                        name="LRate1"
                        id="LRate1"
                        defaultValue={0.0}
                        className="ButtonL"
                        style={{ fontWeight: 400, color: "#3920ce " }}
                      />
                      {/*<input type="button" name="LRate1" id="LRate1" value="0.00" class="ButtonL" onfocus="this.className='ButtonL_hover'" style="font-weight:400;color: #3920ce ;" onblur="this.className='ButtonL'" onmouseover="this.className='ButtonL_hover'" onmouseout="this.className='ButtonL'">*/}
                    </td>
                    <td
                      className="textTeamHead"
                      style={{ verticalAlign: "middle", color: "#17a2b8" }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="center">
                      <input
                        type="button"
                        name="KRate1"
                        id="KRate1"
                        defaultValue={0.0}
                        className="ButtonK"
                        style={{ color: "#e02131 ", fontWeight: 400 }}
                        onfocus="this.className='ButtonK_hover'"
                        onblur="this.className='ButtonK'"
                        onmouseover="this.className='ButtonK_hover'"
                        onmouseout="this.className='ButtonK'"
                      />
                      {/*<input type="button" name="KRate1" id="KRate1" value="0.00" class="ButtonK"  style="color: #17a2b8 ;font-weight:400;color: #e02131 ;" onfocus="this.className='ButtonK_hover'" onblur="this.className='ButtonK'" onmouseover="this.className='ButtonK_hover'" onmouseout="this.className='ButtonK'">*/}
                    </td>
                    <td
                      className="FontTextWhite"
                      id="Positiont562"
                      style={{
                        color: "#f00",
                        fontWeight: 400,
                        verticalAlign: "middle",
                      }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="center">
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="FontTextBlue dsk-visible"
                      style={{ verticalAlign: "middle" }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="center">
                      <span
                        className="FontTextBlue"
                        style={{
                          verticalAlign: "middle",
                          display: "flex",
                          fontWeight: 400,
                          paddingLeft: 10,
                        }}>
                        Trent Rockets
                        <br /> <span style={{ color: "#f00" }} />
                      </span>
                    </td>
                    <td
                      className="FontTextBlue mobi-visible"
                      style={{ verticalAlign: "middle" }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="left">
                      {/*<span class="FontTextBlue" style="vertical-align:middle;display:flex;font-weight:400;padding-left:10px;">Trent Rockets - <span style="color:#f00;"></span> <span id="PositionMt563" style="color:#000;vertical-align:middle;color:#f00;">0.00</span></span>*/}
                      <span
                        className="FontTextBlue"
                        style={{
                          verticalAlign: "middle",
                          display: "flex",
                          fontWeight: 400,
                          paddingLeft: 10,
                        }}>
                        Trent Rockets{" "}
                      </span>
                    </td>
                    <td
                      style={{ verticalAlign: "middle", backgroundColor: "#" }}
                      valign="middle"
                      bgcolor="#FFF"
                      color="green"
                      align="center">
                      <input
                        type="button"
                        name="LRate2"
                        id="LRate2"
                        defaultValue={0.0}
                        className="ButtonL"
                        style={{ fontWeight: 400, color: "#3920ce " }}
                      />
                      {/*<input type="button" name="LRate2" id="LRate2" value="0.00" class="ButtonL" onfocus="this.className='ButtonL_hover'" style="font-weight:400;color: #3920ce ;" onblur="this.className='ButtonL'" onmouseover="this.className='ButtonL_hover'" onmouseout="this.className='ButtonL'">*/}
                    </td>
                    <td
                      className="textTeamHead"
                      style={{ verticalAlign: "middle", color: "#17a2b8" }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="center">
                      <input
                        type="button"
                        name="KRate2"
                        id="KRate2"
                        defaultValue={0.0}
                        className="ButtonK"
                        style={{ color: "#e02131 ", fontWeight: 400 }}
                        onfocus="this.className='ButtonK_hover'"
                        onblur="this.className='ButtonK'"
                        onmouseover="this.className='ButtonK_hover'"
                        onmouseout="this.className='ButtonK'"
                      />
                      {/*<input type="button" name="KRate2" id="KRate2" value="0.00" class="ButtonK"  style="color: #17a2b8 ;font-weight:400;color: #e02131 ;" onfocus="this.className='ButtonK_hover'" onblur="this.className='ButtonK'" onmouseover="this.className='ButtonK_hover'" onmouseout="this.className='ButtonK'">*/}
                    </td>
                    <td
                      className="FontTextWhite"
                      id="Positiont563"
                      style={{
                        color: "#f00",
                        fontWeight: 400,
                        verticalAlign: "middle",
                      }}
                      valign="middle"
                      bgcolor="#FFF"
                      align="center">
                      0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*min max and lagai khai table*/}
            {/*session table*/}
            <div className="overflow-responsive">
              <table
                width="100%"
                cellSpacing={2}
                cellPadding={2}
                border={0}
                className="table bg-white mb-0">
                <tbody id="session_data">
                  <tr>
                    <td
                      className="FontTextWhite10px border"
                      width="50%"
                      style={{
                        color: "#fff ",
                        fontSize: "13px ",
                        background: "#7d5c0e",
                      }}
                      height={25}
                      align="center">
                      SESSION{" "}
                      <a href="https://antspro3.com/Client/rules">
                        <svg
                          className="svg-inline--fa fa-info-circle fa-w-16 text-white"
                          style={{ float: "right" }}
                          aria-hidden="true"
                          data-prefix="fa"
                          data-icon="info-circle"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg="">
                          <path
                            fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                          />
                        </svg>
                        {/* <i class="fa fa-info-circle text-white" style="float:right;"></i> */}{" "}
                      </a>
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      width="25%"
                      style={{
                        color: "#fff ",
                        fontSize: "13px ",
                        background: "#7d5c0e",
                      }}
                      align="center">
                      NOT
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      width="25%"
                      style={{
                        color: "#fff ",
                        fontSize: "13px ",
                        background: "#7d5c0e",
                      }}
                      align="center">
                      YES{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
                    <span id="market_team" />{" "}
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
                    Rate: 0 (){" "}
                  </td>
                  <td
                    className="FontTextWhite10px  amounttab"
                    style={{ background: "#E9E9E9", verticalAlign: "middle" }}>
                    <b style={{ fontSize: 18, paddingLeft: 10 }}>Amount</b>
                    <input
                      type="number"
                      name="amount"
                      className="form-control mobile-width mb-2 mb-md-2 mr-3"
                      style={{ width: "50%", display: "inline-block" }}
                      disabled
                      id="stack_box"
                    />
                    <span
                      className="amount-span d-md-none d-inline-block"
                      id="counterMob">
                      0
                    </span>
                    <a
                      href="javascript:void(0)"
                      className="donebtn"
                      style={{
                        background: "rgb(89, 87, 255)",
                        visibility: "hidden",
                      }}
                      type="button"
                      id="cmdDone">
                      DONE
                    </a>
                    <div className="amount-btndiv mb-1 pl-2 d-none d-md-flex">
                      <a href="javascript:void(0)">1H</a>
                      <a href="javascript:void(0)">5H</a>
                      <a href="javascript:void(0)">10H</a>
                      <a href="javascript:void(0)">25H</a>
                      <a href="javascript:void(0)">50H</a>
                      <a className="bg-danger text-white">Clear</a>
                    </div>
                    <div className="amount-btndiv mb-1 pl-2 d-none d-md-flex">
                      <a href="javascript:void(0)">1L</a>
                      <a href="javascript:void(0)">2L</a>
                      <a href="javascript:void(0)">5L</a>
                      <a href="javascript:void(0)">10L</a>
                      <a href="javascript:void(0)">25L</a>
                      <a className="bg-danger text-white" id="counter">
                        0
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
            <div
              className="fancybetdiv text-center"
              style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
              <h6
                className="mb-0"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px ",
                  fontFamily: '"Roboto"',
                }}>
                MATCH BETS
              </h6>
            </div>
            <div className="overflow-responsive">
              <table
                width="100%"
                cellSpacing={2}
                cellPadding={2}
                border={0}
                className="table compete-game-"
                style={{ whiteSpace: "nowrap" }}>
                <thead>
                  <tr>
                    <td
                      className="FontTextWhite10px border"
                      style={{
                        color: "#fff ",
                        background: "#7d5c0e",
                      }}
                      height={25}
                      align="center">
                      TEAM{" "}
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      RATE
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      AMOUNT
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      MODE
                    </td>
                    {/*<td class="FontTextWhite10px border" style="color: #fff ;"  align="center">P&L</td>*/}
                  </tr>
                </thead>
                <tbody id="MyTeamBets"></tbody>
              </table>
            </div>
            <br />
            <div
              className="fancybetdiv text-center"
              style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
              <h6
                className="mb-0"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px ",
                  fontFamily: '"Roboto"',
                }}>
                FANCY BETS
              </h6>
            </div>
            <div className="overflow-responsive">
              <table
                width="100%"
                cellSpacing={2}
                cellPadding={2}
                border={0}
                className="table compete-game-"
                style={{ whiteSpace: "nowrap" }}>
                <thead>
                  <tr>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      height={25}
                      align="center">
                      SESSION{" "}
                    </td>
                    {/*<td class="FontTextWhite10px border" style="color: #fff ;white-space:nowrap;"   align="center">DATE </td>*/}
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      RUN
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      RATE
                    </td>
                    {/*<td class="FontTextWhite10px border" style="color: #fff ;"   align="center">RESULT</td>*/}
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      AMOUNT
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      MODE
                    </td>
                    {/*<td class="FontTextWhite10px border" style="color: #fff ;"  align="center">P&L</td>*/}
                  </tr>
                </thead>
                <tbody id="MySessionBets"></tbody>
              </table>
            </div>
            <br />
            <div
              className="fancybetdiv text-center"
              style={{ background: "#2a363b", padding: 2, letterSpacing: 1 }}>
              <h6
                className="mb-0"
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "14px ",
                  fontFamily: '"Roboto"',
                }}
                data-toggle="modal"
                data-target="#">
                COMPLETED FANCY BETS
              </h6>
            </div>
            <div className="overflow-responsive">
              <table
                width="100%"
                cellSpacing={2}
                cellPadding={2}
                border={0}
                className="table compete-game-"
                style={{ whiteSpace: "nowrap" }}>
                <thead>
                  <tr>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      height={25}
                      align="center">
                      RUNNER{" "}
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{
                        color: "#fff ",
                        whiteSpace: "nowrap",
                        background: "#7d5c0e",
                      }}
                      align="center">
                      DATE{" "}
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      RUN
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      RATE
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      RESULT
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      valign="middle"
                      align="center">
                      AMOUNT
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      MODE
                    </td>
                    <td
                      className="FontTextWhite10px border"
                      style={{ color: "#fff ", background: "#7d5c0e" }}
                      align="center">
                      P&amp;L
                    </td>
                  </tr>
                </thead>
                <tbody id="MySessionCompletedBets"></tbody>
              </table>
            </div>
            <div className="overflow-hidden">
              <div className="row other-matchrow">
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/239">
                    <h6>Kochi Blue Tigers v Trivandrum Royals</h6>
                    <span className="date">Sep 09 2024 , 02:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/229">
                    <h6>Aries Kollam Sailors v Kochi Blue Tigers</h6>
                    <span className="date">Sep 07 2024 , 02:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/228">
                    <h6>Calicut Globstars v Thrissur Titans</h6>
                    <span className="date">Sep 07 2024 , 06:45 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/227">
                    <h6>Western Storm v North West Thunder</h6>
                    <span className="date">Sep 07 2024 , 03:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/224">
                    <h6>Noida Super Kings v Kanpur Superstars</h6>
                    <span className="date">Sep 07 2024 , 03:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/223">
                    <h6>Scotland v Australia</h6>
                    <span className="date">Sep 07 2024 , 06:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/219">
                    <h6>UAE Women v Zimbabwe Women</h6>
                    <span className="date">Sep 07 2024 , 05:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/218">
                    <h6>Bud Cricket Club v City Cricket Club</h6>
                    <span className="date">Sep 06 2024 , 01:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/216">
                    <h6>Kochi Blue Tigers v Alleppey Ripples</h6>
                    <span className="date">Sep 05 2024 , 06:45 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/215">
                    <h6>Calicut Globstars v Trivandrum Royals</h6>
                    <span className="date">Sep 06 2024 , 06:45 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/213">
                    <h6>Namibia Women v UAE Women</h6>
                    <span className="date">Sep 06 2024 , 05:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/212">
                    <h6>Lucknow Falcons v Gorakhpur Lions</h6>
                    <span className="date">Sep 05 2024 , 07:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/211">
                    <h6>Kashi Rudras v Kanpur Superstars</h6>
                    <span className="date">Sep 05 2024 , 03:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/208">
                    <h6>Northern Raiders v Wellington Wolves</h6>
                    <span className="date">Sep 05 2024 , 09:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/206">
                    <h6>Scotland v Australia</h6>
                    <span className="date">Sep 06 2024 , 06:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/205">
                    <h6>North-West Warriors v Munster Reds</h6>
                    <span className="date">Sep 05 2024 , 03:15 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/196">
                    <h6>Sussex v Lancashire</h6>
                    <span className="date">Sep 04 2024 , 11:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/193">
                    <h6>Lucknow Falcons v Kanpur Superstars</h6>
                    <span className="date">Sep 03 2024 , 03:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/190">
                    <h6>
                      St Kitts &amp; Nevis Patriots v Guyana Amazon Warriors
                    </h6>
                    <span className="date">Sep 05 2024 , 04:30 AM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/187">
                    <h6>Noida Super Kings v Gorakhpur Lions</h6>
                    <span className="date">Sep 02 2024 , 07:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/186">
                    <h6>Kashi Rudras v Meerut Mavericks</h6>
                    <span className="date">Sep 02 2024 , 03:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/185">
                    <h6>South Africa A v Sri Lanka A</h6>
                    <span className="date">Sep 02 2024 , 01:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/184">
                    <h6>Bud Cricket Club v Gauhati Town Club</h6>
                    <span className="date">Sep 02 2024 , 01:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/181">
                    <h6>Scotland v Australia</h6>
                    <span className="date">Sep 04 2024 , 06:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/174">
                    <h6>Mysore Warriors v Hubli Tigers</h6>
                    <span className="date">Aug 27 2024 , 07:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/173">
                    <h6>Kashi Rudras v Gorakhpur Lions</h6>
                    <span className="date">Aug 27 2024 , 03:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/172">
                    <h6>Shivamogga Lions v Gulbarga Mystics</h6>
                    <span className="date">Aug 27 2024 , 03:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/170">
                    <h6>USA v Canada</h6>
                    <span className="date">Aug 27 2024 , 05:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/168">
                    <h6>Kuwait v Hong Kong</h6>
                    <span className="date">Aug 27 2024 , 08:00 AM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/161">
                    <h6>Australian Capital Territory v Melbourne Stars</h6>
                    <span className="date">Aug 13 2024 , 10:30 AM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/160">
                    <h6>Northern Territory v Melbourne Renegades</h6>
                    <span className="date">Aug 13 2024 , 09:00 AM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/159">
                    <h6>Amo Sharks v Mis Ainak Knights</h6>
                    <span className="date">Aug 12 2024 , 03:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/158">
                    <h6>Villianur Mohit Kings v Ossudu Accord Warriors</h6>
                    <span className="date">Aug 12 2024 , 02:45 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/157">
                    <h6>Tasmania v Bangladesh A</h6>
                    <span className="date">Aug 12 2024 , 02:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/155">
                    <h6>Australian Capital Territory v Perth Scorchers</h6>
                    <span className="date">Aug 12 2024 , 10:00 AM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/153">
                    <h6>Birmingham Phoenix v Trent Rockets</h6>
                    <span className="date">Aug 12 2024 , 11:00 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/149">
                    <h6>Birmingham Phoenix Women v Trent Rockets Women</h6>
                    <span className="date">Aug 12 2024 , 07:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/145">
                    <h6>Welsh Fire v Birmingham Phoenix</h6>
                    <span className="date">Aug 10 2024 , 10:30 PM</span>
                  </a>
                </div>
                <div className="col-1">
                  <span className="green-circle" />
                </div>
                <div className="col-11 px-2">
                  <a href="https://antspro3.com/client/game/143">
                    <h6>Welsh Fire Women v Birmingham Phoenix Women</h6>
                    <span className="date">Aug 10 2024 , 07:00 PM</span>
                  </a>
                </div>
              </div>
            </div>
            {/*<div class="menu" id="menu" align="center" style="background:#">*/}
            {/*   <ul class="nav" style="display:block;background:#">*/}
            {/*      <li class="active" style="background:#"><a href="https://antspro3.com/client/inplay" style="background:#">BACK TO IN PLAY GAMES</a></li>*/}
            {/*   </ul>*/}
            {/*</div>*/}
          </div>
          <input
            name="FavTeamId"
            type="hidden"
            id="FavTeamId"
            defaultValue=""
          />
          <input name="NameChk" type="hidden" id="NameChk" defaultValue="" />
          <input name="matchId" type="hidden" id="matchId" defaultValue={144} />
          <input
            name="MatchCode"
            type="hidden"
            id="MatchCode"
            defaultValue={144}
          />
          <input name="MatchRate" type="hidden" id="MatchRate" />
          <input name="MatchTeam" type="hidden" id="MatchTeam" />
          <input name="LockManual" type="hidden" id="LockManual" />
          <input name="SessionYN" type="hidden" id="SessionYN" />
          <input name="SessionName" type="hidden" id="SessionName" />
          <input name="MatchStatus" type="hidden" id="MatchStatus" />
          <input name="MatchLockStatus" type="hidden" id="MatchLockStatus" />
          <input
            name="SessionLockStatus"
            type="hidden"
            id="SessionLockStatus"
          />
          <input
            name="AmountTimeChk"
            type="hidden"
            id="AmountTimeChk"
            defaultValue=""
          />
          <input
            name="AmountTime1"
            type="hidden"
            id="AmountTime1"
            defaultValue=""
          />
          <input
            name="RateMode"
            type="hidden"
            id="RateMode"
            defaultValue="Automatic"
          />
          <input name="ID" type="hidden" id="ID" defaultValue="" />
          <input
            name="MatchTeamID"
            type="hidden"
            id="MatchTeamID"
            defaultValue=""
          />
          <input name="SessionRate" type="hidden" id="SessionRate" />
          <input
            name="MatchBitChk"
            type="hidden"
            id="MatchBitChk"
            defaultValue=""
          />
          {/*<input name="MatchBitPos" type="hidden" id="MatchBitPos" value="">*/}
          <input
            name="MatchBitChk_Manualy"
            type="hidden"
            id="MatchBitChk_Manualy"
            defaultValue=""
          />
          <input
            name="SessionBitChk"
            type="hidden"
            id="SessionBitChk"
            defaultValue=""
          />
          <input
            name="SessionBitPos"
            type="hidden"
            id="SessionBitPos"
            defaultValue=""
          />
          <input
            name="SessionBitChk_Manualy"
            type="hidden"
            id="SessionBitChk_Manualy"
            defaultValue=""
          />
          <input
            name="AddSessionChk"
            type="hidden"
            id="AddSessionChk"
            defaultValue=""
          />
          <input
            name="DeleteChkMultiple"
            type="hidden"
            id="DeleteChkMultiple"
            defaultValue=""
          />
          <input
            name="ClientName"
            type="hidden"
            id="ClientName"
            defaultValue={15}
          />
          <input
            name="SessBitMultiChk"
            type="hidden"
            id="SessBitMultiChk"
            defaultValue=""
          />
          <input
            name="MatchBitMultiChk"
            type="hidden"
            id="MatchBitMultiChk"
            defaultValue=""
          />
          <input
            name="ClientBitMultiChk"
            type="hidden"
            id="ClientBitMultiChk"
            defaultValue=""
          />
          <input name="Team0" type="hidden" id="Team0" defaultValue="" />
          <input
            name="Team1"
            type="hidden"
            id="Team1"
            defaultValue="Southern Brave"
          />
          <input
            name="Team2"
            type="hidden"
            id="Team2"
            defaultValue="Trent Rockets"
          />
          <input name="Team3" type="hidden" id="Team3" defaultValue="" />
          <input name="MatchMin" type="hidden" id="MatchMin" defaultValue="" />
          <input name="MatchMax" type="hidden" id="MatchMax" defaultValue="" />
          <input
            name="SessionMin"
            type="hidden"
            id="SessionMin"
            defaultValue=""
          />
          <input
            name="SessionMax"
            type="hidden"
            id="SessionMax"
            defaultValue=""
          />
          <input
            name="SessionRun"
            type="hidden"
            id="SessionRun"
            size={7}
            onkeypress="return SetFocusSession(event,this.name)"
          />
          <input name="KLRate" type="hidden" id="KLRate" />
          <input
            name="DateTimeP"
            type="hidden"
            id="DateTimeP"
            defaultValue={1751560635000}
          />
          <input name="KRate1Chk" type="hidden" id="KRate1Chk" />
          <input name="LRate1Chk" type="hidden" id="LRate1Chk" />
          <input name="KRate2Chk" type="hidden" id="KRate2Chk" />
          <input name="LRate2Chk" type="hidden" id="LRate2Chk" />
          <input
            name="SubmitTimeValue"
            type="hidden"
            id="SubmitTimeValue"
            defaultValue=""
          />
        </form>
      </div>
      {/*</div>*/}
      <div className="d-none">
        <form id="formNew2" action="kk">
          <input type="text" name="amount" id="stack_box_form" />
          <div id="bet_datas" />
          <input type="submit" defaultValue="submit" />
        </form>
      </div>
      {/*==============Bet Modal Start===============*/}
      <div
        className="modal fade"
        id="betpink"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-pink">
            <form id="formNO">
              <div className="modal-header" id="stakeNO" />
              <div className="modal-body text-center stakes" id="stakes_pink" />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning p-1"
                  data-dismiss="modal">
                  Cancel <i className="bx bx-x" />
                </button>
                <button
                  type="submit"
                  id="formNO_sbmtbtn"
                  className="btn btn-success p-1">
                  Submit <i className="bx bx-check" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="betblue"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-blue">
            <form id="formYES">
              <div className="modal-header" id="stakeYES" />
              <div className="modal-body text-center stakes" id="stakes_blue" />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning p-1"
                  data-dismiss="modal">
                  Cancel <i className="bx bx-x" />
                </button>
                <button
                  type="submit"
                  id="formYES_sbmtbtn"
                  className="btn btn-success p-1">
                  Submit <i className="bx bx-check" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="teamLagai"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-blue">
            <form id="formL">
              <div className="modal-header" id="stakeL" />
              <div className="modal-body text-center stakes" id="team_lagai" />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning p-1"
                  data-dismiss="modal">
                  Cancel <i className="bx bx-x" />
                </button>
                <button
                  type="submit"
                  id="formL_sbmtbtn"
                  className="btn btn-success p-1">
                  Submit <i className="bx bx-check" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="teamKhai"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content bg-pink">
            <form id="formK">
              <div className="modal-header" id="stakeK" />
              <div className="modal-body text-center stakes" id="team_khai" />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning p-1"
                  data-dismiss="modal">
                  Cancel <i className="bx bx-x" />
                </button>
                <button
                  type="submit"
                  id="formK_sbmtbtn"
                  className="btn btn-success p-1">
                  Submit <i className="bx bx-check" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*================Bet Modal End======================*/}
      {/*Bet Placed Modal*/}
      <div className="modal fade" id="betModal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              border: "none ",
              borderRadius: 0,
              background: "#d3cece",
              boxShadow: "0px 0px 5px #4c4c4c",
            }}>
            <div className="modal-body text-center ">
              <h3
                className="text-white text-bold mb-4"
                style={{ fontSize: 18 }}>
                Bet Successful
              </h3>
              <a
                href="#"
                className="btn btn-light text-danger"
                data-dismiss="modal"
                style={{ borderRadius: 20, fontSize: 14 }}>
                OK
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*================Toster message==============*/}
      <div id="toast">
        <div id="img">
          <i id="toastSymbol" className="" />
        </div>
        <div id="desc" />
      </div>
      <br />
      <h4
        style={{
          color: "#000",
          fontFamily: "Verdana, Geneva, sans-serif",
          fontSize: 12,
          fontWeight: "bold",
        }}
        align="center"
      />
      {/*--- End Content -----------*/}
    </div>
  );
};

export default GameDetails;
