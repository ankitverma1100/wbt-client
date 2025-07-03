import './style.scss';

const CasinoHome = () => {
  return (
    // <div className="gx-main-content-wrapper" style={{ marginBottom: 120 }}>
    //   <div className="ant-card ant-card-bordered gx-bg-transparent">
    //     <div className="ant-card-body">
    //       <article className="ant-typography gx-bg-grey gx-text-white gx-mb-3 gx-text-center gx-font-weight-semi-bold gx-fs-lg gx-py-2">
    //         Virtual Casino
    //       </article>
    //       <Row
    //         style={{ gap: 10 }}
    //         justify="center"
    //         className="gx-bg-flax  gx-block gx-justify-center gx-items-center gx-lg:space-x-3 lg:space-y-0 gx-space-x-0 space-y-3 gx-md:px-10">
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           {" "}
    //           <a href="/main/virtual-games/dus-ka-dam/">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="dus-ka-dam"
    //                   src="https://antpro99.pro/assets/images/casino-images/dus-ka-dam.jpeg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/virtual-games/roultee/">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="roultee"
    //                   src="https://antpro99.pro/assets/images/casino-images/roultee.jpeg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/virtual-games/andar-bahar/">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="andar-bahar"
    //                   src="https://antpro99.pro/assets/images/casino-images/andar-bahar.jpeg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //       </Row>
    //       <article className="ant-typography gx-bg-grey gx-text-white gx-mb-3 gx-text-center gx-font-weight-semi-bold gx-fs-lg gx-py-2">
    //         Live Casino
    //       </article>
    //       <Row
    //         style={{ gap: 10 }}
    //         justify="center"
    //         className="gx-bg-flax  gx-block gx-justify-center gx-items-center gx-lg:space-x-3 lg:space-y-0 gx-space-x-0 space-y-3 gx-md:px-10">
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           {" "}
    //           <a href="/main/teen20/3030">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="teenpatti-20"
    //                   src="https://antpro99.pro/assets/images/casino-images/Teenpatti T20.webp"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/lucky7/3032">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="lucky-7"
    //                   src="https://antpro99.pro/assets/images/casino-images/Lucky7-A.png"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/dt20/3035">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="dragon-tiger"
    //                   src="https://antpro99.pro/assets/images/casino-images/dt-20.jpg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/aaa/3056">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="amar-akbar-anthony"
    //                   src="https://antpro99.pro/assets/images/casino-images/anthony-amar.jpg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/worli2/3054">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="Live-Instant-Worli"
    //                   src="https://antpro99.pro/assets/images/casino-images/worli-matka-tvs.jpeg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/dt202/3059">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="Dragen-Tiger-202"
    //                   src="https://antpro99.pro/assets/images/casino-images/rg_dragon_tiger.jpg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //         <Col lg={3} xs={10} md={6} className="gx-px-0  gx-mb-0">
    //           <a href="/main/teen/3031">
    //             <div className="ant-card ant-card-bordered ant-card-hoverable gx-position-relative">
    //               <div className="ant-card-cover">
    //                 <img
    //                   alt="teen-patti oneday"
    //                   src="https://antpro99.pro/assets/images/casino-images/1-Day-Teen-Patti.jpg"
    //                   className="gx-rounded-base gx-pointer gx-object-contain"
    //                   style={{ height: "11rem" }}
    //                 />
    //               </div>
    //               <div className="ant-card-body" />
    //             </div>
    //           </a>
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid p-2">
      <div className="new-heading mt-2">Virtual Casino</div>
      <div className="flexdiv">
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/imgs/andar-bahar.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Andar Bahar</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/imgs/Dragon%20Tiger.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Dragon Tiger</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/imgs/Teenpatti%20One-Day%20(Virtual).png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Teen Patti - One Day</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/imgs/7.png"
              style={{ borderRadius: 5 }}
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Lucky 7</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        {/*<div class="col-6 event-row  text-center float-left mt-3">*/}
        {/*    <div class="card-body m-0 p-0">*/}
        {/*      <a href="#">*/}
        {/*        <img class="img-fluid" src="https://antspro3.com/clientAssets/img/6.png">*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
      <div className="new-heading mt-2">Live Casino</div>
      <div className="flexdiv" style={{ justifyContent: "center" }}>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/andar-bahar.jpeg"
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Andar Bahar</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/amar-akhbar.jpeg"
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Amar Akhbar</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/lucky7.jpeg"
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Live Dragon</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/teen-patti2.jpeg"
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Teen Patti</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/live-dragon-tiger2.jpeg"
              className="w-100"
            />
            {/*<div class="gamecard-body">*/}
            {/*    <div class="row">*/}
            {/*        <div class="col-md-8 col-8">*/}
            {/*            <h4>Live Dragon 2</h4>*/}
            {/*        </div>*/}
            {/*        <div class="col-md-4 col-4">*/}
            {/*            */}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="casino-game">
          <div className="">
            <img
              src="https://antspro3.com/clientAssets/img/live-dragon-tiger.jpeg"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoHome;
