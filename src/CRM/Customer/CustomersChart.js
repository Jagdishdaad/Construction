import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CRMChart from "../Components/CRMChart/CRMChart";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "User",
      data: [33, 43, 10, 20, 24, 58],
      fill: true,
      backgroundColor: "rgba(55, 81, 255, 0)",
      borderColor: "#3751FF",
      tension: 0.2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 120,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: "right",

      grid: {
        borderWidth: 0,
        color: "#C4C4C4",
      },
    },
    x: {
      grid: {
        borderWidth: 0,
        tickColor: "grey",
      },
    },
  },
};
const useStyles = makeStyles({
  chart: {
    width: "70vw",
    height: "380px ",
    marginTop: "-10vh",
  },
});

function CustomersChart() {
  return (
    <div>
      <CRMChart data={data} options={options} useStyles={useStyles} />
    </div>
  );
}

export default CustomersChart;
