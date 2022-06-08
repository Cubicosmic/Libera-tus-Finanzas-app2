import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true
};

export const Graph = ({ date, saldo }) => {

  const labels = date;
  
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Saldo",
          data: saldo,
          tension: 0.3,
          borderColor: "#066",
          pointRadius: 5,
          pointBackgroundColor: "#066",
        }
      ],
      labels
    };
  }, []);

  return (
    <Line data={data} options={options}/>
  )
}