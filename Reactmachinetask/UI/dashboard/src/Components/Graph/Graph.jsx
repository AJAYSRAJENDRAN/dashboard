import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card } from "@mui/material";
import jone from "../../Assets/Rectangle 10.png";

function Graph() {
  const [graphData, setGraphData] = useState([]);
  const [pie, setpie] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/graph");
        setGraphData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (graphData.length > 0) {
      const labels = graphData.map((item) => item.x);
      const dataValues = graphData.map((item) => item.y);

      const config = {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Y Values",
              data: dataValues,
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              backgroundColor: "white",
              fill: false,
            },
          ],
        },

        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById("myChart").getContext("2d");
      chartRef.current = new Chart(ctx, config);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [graphData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/pie-chart");
        setpie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const pieChartColors = [
    "#b3ff99",
    "#66ff66",
    "#33cc33",
    "#99ff99",
    "#00cc00",
  ];

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h4 style={{}}>Good Morning !</h4>
        </div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            marginTop: "1px",
            minWidth: "9rem",
            height: "3.5rem",
            borderRadius: "1rem",
            marginLeft: "1050px",
          }}
        >
          <div style={{ padding: "0", marginTop: "8%", marginLeft: "10%" }}>
            <h4 style={{ margin: "0" }} className="headername">
              Jone Doe
            </h4>
            <h6 style={{ margin: "0" }}>jon@doe.com</h6>
          </div>
          <div>
            <img style={{ marginTop: "35%", marginLeft: "30%" }} src={jone} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "white", marginLeft: "30px" }}>
          <Card sx={{ maxWidth: 800 }}>
            <canvas id="myChart" width="600" height="200"></canvas>
          </Card>
        </div>
        <div style={{ marginLeft: "150px" }}>
          <Card sx={{ maxWidth: 400 }}>
            <PieChart
              series={[
                {
                  data: pie,
                  colors: pieChartColors,
                },
              ]}
              width={400}
              height={200}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Graph;
