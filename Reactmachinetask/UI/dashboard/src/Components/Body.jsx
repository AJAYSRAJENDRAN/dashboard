import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Graph from "./Graph/Graph";
import Table from "./Table/Table";

function Body() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <div>
            {" "}
            <Graph />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
