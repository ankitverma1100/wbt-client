/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
import { useState } from "react";
const { Option } = Select;
const BetplaceMob = () => {
  const [value, setValue] = useState<any>(null);

  const handleChange = (val: any) => {
    setValue(val);
  };

  return (
    <div className="hide-desk gx-border gx-my-2 gx-d-block">
      <div className="gx-bg-flex  gx-justify-content-between gx-px-1 gx-align-items-center">
        <div className="gx-text-nowrap">Amount : &nbsp;</div>
        <div style={{ width: "180.5px" }}>
          <Select
            showSearch
            value={value}
            style={{ width: "100%", height: "35.5px" }}
            placeholder="Enter a number or select a value"
            optionLabelProp="label"
            onChange={handleChange}>
            <Option value={100} label="Ten">
              100
            </Option>
            <Option value={500} label="Twenty">
              500
            </Option>
            <Option value={1000} label="Thirty">
              1000
            </Option>
            <Option value={2000} label="Thirty">
              2000
            </Option>
            <Option value={5000} label="Thirty">
              5000
            </Option>
            <Option value={10000} label="Thirty">
              10000
            </Option>
            <Option value={25000} label="Thirty">
              25000
            </Option>
            <Option value={50000} label="Thirty">
              50000
            </Option>
            <Option value={100000} label="Thirty">
              100000
            </Option>
            <Option value={200000} label="Thirty">
              200000
            </Option>
            <Option value={300000} label="Thirty">
              300000
            </Option>
            <Option value={500000} label="Thirty">
              500000
            </Option>
          </Select>
        </div>

        <div className="gx-bg-flex  gx-justify-content-between  gx-align-items-center">
          <span className="gx-bg-dark gx-text-white gx-fs-lg- gx-font-weight-bold gx-px-2 gx-py-2 gx-bg-flex  gx-justify-content-between gx-mx-1  gx-align-items-center">
            0
          </span>
          <button
            type="button"
            className="ant-btn ant-btn-default gx-bg-primary gx-text-white gx-text-uppercase  gx-justify-content-center  gx-mb-0 gx-px-2"
            disabled>
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetplaceMob;
