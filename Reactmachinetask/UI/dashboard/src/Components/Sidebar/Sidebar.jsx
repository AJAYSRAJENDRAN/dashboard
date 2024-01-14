import React from "react";
import bgimg from "../../Assets/Rectangle 1.png";
import Briefcase from "../../Assets/Briefcase.png";
import StatBoard from "../../Assets/StatBoard.png";
import Menu from "../../Assets/Circled Menu.png";
import Support from "../../Assets/Support.png";
import Help from "../../Assets/Help.png";
import Puzzle from "../../Assets/Puzzle.png";
import Shutdown from "../../Assets/Shutdown.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <img style={{ height: "690px", width: "220px" }} src={bgimg} alt="" />
      <div style={{}}>
        <img
          style={{
            position: "absolute",
            top: "10%",
            left: "7%",
            transform: "translate(-50%, -50%)",
          }}
          src={Briefcase}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: "18%",
            left: "7%",
            transform: "translate(-50%, -50%)",
          }}
          src={StatBoard}
          alt=""
        />
        <button className="Dashboard-btn">
          <img
            style={{ marginRight: "2%", verticalAlign: "middle" }}
            src={Menu}
            alt=""
          />
          <b> Dashboard</b>
        </button>
        <button className="Support-btn">
          <img
            style={{ marginRight: "2%", verticalAlign: "middle" }}
            src={Support}
            alt=""
          />
          <b> Support</b>
        </button>
        <button className="Plugins-btn">
          <img
            style={{ marginRight: "2%", verticalAlign: "middle" }}
            src={Puzzle}
            alt=""
          />
          <b> Plugins</b>
        </button>
        <button className="Help-btn">
          <img
            style={{ marginRight: "2%", verticalAlign: "middle" }}
            src={Help}
            alt=""
          />
          <b> Help</b>
        </button>
        <button className="Logout-btn">
          <b> Logout</b>&nbsp;&nbsp;
          <img
            style={{ marginRight: "2%", verticalAlign: "middle" }}
            src={Shutdown}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
