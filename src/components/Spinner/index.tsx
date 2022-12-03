import { Spin } from "antd";
import React from "react";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
    </div>
  );
}

export default Spinner;
