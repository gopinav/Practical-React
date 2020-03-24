import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [3, 2, 2, 6, 4],
        borderColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ]
      },
      {
        label: 'Sales 2019 (M)',
        data: [4, 3, 2, 2, 3],
        borderColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Bar Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1
          }
        }
      ]
    }
  }
  return <Bar data={data} options={options} />
}

export default BarChart
