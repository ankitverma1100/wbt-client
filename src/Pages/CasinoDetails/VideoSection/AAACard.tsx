import CardComp from "./CardComp";

const AAACard = ({ t1 }: any) => {
  return (
   
      <div
        className="ant-row gx-pt-2"
        style={{
          marginLeft: "-8px",
          marginRight: "-8px",
          rowGap: 8,
        }}>
        <CardComp shown={t1.C1 != "1"} card={t1.C1 || "1"} />
      </div>
    
  );
};

export default AAACard;
