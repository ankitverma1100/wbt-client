import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Balance from "../Balance";
// import News from "../News";
import AppSidebar from "../../Component/LeftSide/AppSidebar";
import { useState } from "react";
import { useGetUserBalanceQuery } from "../../store/service/userServices/userServices";
// import Loder from "../Loder";
// import Rule from "../../Pages/Rule/Rule";

const PageLayout = () => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(!visible);
  };

  const { data: userBalance } = useGetUserBalanceQuery(undefined, {
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
  });
  return (
    <>
      <Header onClose={onClose} userBalance={userBalance?.data?.balance}/>
      <Balance userBalance={userBalance?.data}/>
      {/* <Rule /> */}
      <Outlet />
      <AppSidebar visible={visible} onClose={onClose} />
    </>
    // <div className="ptr">
    //   <div
    //     className="ptr__children"
    //     style={{ overflow: "hidden auto", transform: "unset" }}>
    //     <section className="ant-layout ant-layout-has-sider gx-app-layout">
    //       <aside
    //         className="ant-layout-sider ant-layout-sider-dark gx-app-sidebar gx-collapsed-sidebar gx-layout-sider-dark"
    //         style={{
    //           flex: "0 0 200px",
    //           maxWidth: 200,
    //           minWidth: 200,
    //           width: 200,
    //         }}>
    //         <div className="ant-layout-sider-children" />
    //       </aside>
    //       <section className="ant-layout">
    //         <Header onClose={onClose} />

    //         <News />
    //         <Balance />
    //         <main className="ant-layout-content gx-layout-content   ">
    //           <Outlet />
    //         </main>
    //       </section>
    //       <div className="notification-container notification-container-empty">
    //         <div />
    //       </div>
    //     </section>
    //     <AppSidebar visible={visible} onClose={onClose} />
    //   </div>

    // </div>
  );
};

export default PageLayout;
