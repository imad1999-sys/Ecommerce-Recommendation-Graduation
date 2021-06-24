import React from "react";
import "../../../assets/css/styles.css";
import { Line } from "react-chartjs-2";

const PriceChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["احمر", "ازرق", "اصفر", "اخضر", "ارجواني", "برتقالي"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={100}
        height={50}
      />
    </div>
  );
};
export default PriceChart;
