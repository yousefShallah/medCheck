import React from "react";
import { Box } from "@mui/material";
import Chart from "react-apexcharts";

function ChartComponent({
  tag,
  chartLabels,
  chartSeries,
  legend,
  legendPosition,
  colors,
}) {
  // default tag ---> "" /// or patient-LastWeek
  let chartData = {
    series: chartSeries,

    options: {
      labels: chartLabels,
      chart: {
        type: "donut",
      },
      colors: colors ? colors : [],
      show: true,
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 45,
          },
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
              },
            },
          },
        },
      },
      legend: {
        show: legend,
        position: legendPosition,
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false,
        },
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          return chartData.series[seriesIndex];
        },
        style: {
          fontSize: "14px",
          fontWeight: "300",
          colors: ["#000"],
          textShadow: "none",
          boxShadow: "none",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Box
      padding="16px 0px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {chartSeries && chartLabels && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="380px"
          height="350"
        />
      )}
    </Box>
  );
}

export default ChartComponent;
