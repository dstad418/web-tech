// ChartRenderer.js

import { Chart } from 'chart.js';

const backgroundColors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
    'rgba(83, 102, 255, 0.8)',
    'rgba(40, 159, 64, 0.8)',
    'rgba(210, 199, 199, 0.8)',
    'rgba(78, 52, 199, 0.8)',
    'rgba(128, 0, 0, 0.8)',
    'rgba(0, 128, 0, 0.8)',
    'rgba(0, 0, 128, 0.8)',
    'rgba(128, 128, 0, 0.8)',
    'rgba(128, 0, 128, 0.8)',
    'rgba(0, 128, 128, 0.8)',
    'rgba(192, 192, 192, 0.8)',
    'rgba(128, 128, 128, 0.8)',
    'rgba(0, 0, 0, 0.8)',
    'rgba(255, 0, 0, 0.8)',
    'rgba(0, 255, 0, 0.8)',
    'rgba(0, 0, 255, 0.8)',
    'rgba(255, 255, 0, 0.8)',
    'rgba(0, 255, 255, 0.8)',
    'rgba(255, 0, 255, 0.8)',
    'rgba(220, 20, 60, 0.8)',
    'rgba(184, 134, 11, 0.8)',
  ];
  
  const borderColors = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(40, 159, 64, 1)',
    'rgba(210, 199, 199, 1)',
    'rgba(78, 52, 199, 1)',
    'rgba(128, 0, 0, 0.8)',
    'rgba(0, 128, 0, 0.8)',
    'rgba(0, 0, 128, 0.8)',
    'rgba(128, 128, 0, 0.8)',
    'rgba(128, 0, 128, 0.8)',
    'rgba(0, 128, 128, 0.8)',
    'rgba(192, 192, 192, 0.8)',
    'rgba(128, 128, 128, 0.8)',
    'rgba(0, 0, 0, 0.8)',
    'rgba(255, 0, 0, 0.8)',
    'rgba(0, 255, 0, 0.8)',
    'rgba(0, 0, 255, 0.8)',
    'rgba(255, 255, 0, 0.8)',
    'rgba(0, 255, 255, 0.8)',
    'rgba(255, 0, 255, 0.8)',
    'rgba(220, 20, 60, 0.8)',
    'rgba(184, 134, 11, 0.8)',
];

const renderChart = (houseData) => {
    const chartElement = document.querySelector('.donut-chart');

    // Creating chart!
    new Chart(chartElement, {
        type: 'doughnut',
        data: {
            labels: Object.keys(houseData),
            datasets: [
                {
                    data: Object.values(houseData),
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            legend: {
                display: false
            }
        }
    });
};

export { renderChart };
