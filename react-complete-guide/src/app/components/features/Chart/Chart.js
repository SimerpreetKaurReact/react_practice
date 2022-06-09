import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const datapointValues = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapointValues);
  console.log(datapointValues, totalMaximum);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          max={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
