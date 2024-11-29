import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Función para generar datos ficticios de presión y altitud
const generatePressureAltitudeData = () => {
  const data = [];
  const now = new Date();

  // Genera 7 días de datos
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);

    data.push({
      date: date.toLocaleDateString(),
      pressure: Math.floor(Math.random() * (1050 - 900 + 1)) + 900, // Presión aleatoria en hPa (900-1050)
      altitude: Math.floor(Math.random() * (2000 - 0 + 1)) + 0, // Altitud aleatoria en metros (0-2000)
    });
  }

  return data;
};

const PressureAltitudeChart = () => {
  const chartData = generatePressureAltitudeData();

  // Preparar los datos para la gráfica
  const data = {
    labels: chartData.map(item => item.date), // Fechas
    datasets: [
      {
        label: 'Presión (hPa)',
        data: chartData.map(item => item.pressure), // Datos de presión
        borderColor: 'rgba(75,192,192,1)', // Color de la línea
        backgroundColor: 'rgba(75,192,192,0.2)', // Relleno de la línea
        yAxisID: 'y-pressure', // Eje Y para presión
      },
      {
        label: 'Altitud (m)',
        data: chartData.map(item => item.altitude), // Datos de altitud
        borderColor: 'rgba(255,99,132,1)', // Color de la línea
        backgroundColor: 'rgba(255,99,132,0.2)', // Relleno de la línea
        yAxisID: 'y-altitude', // Eje Y para altitud
      },
    ],
  };

  // Configuración de la gráfica
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Presión y Altitud',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fecha',
        },
      },
      'y-pressure': {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Presión (hPa)',
        },
        min: 850,
        max: 1100,
      },
      'y-altitude': {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Altitud (m)',
        },
        min: 0,
        max: 2500,
        grid: {
          drawOnChartArea: false, // Evitar superposición con la presión
        },
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de Presión y Altitud</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PressureAltitudeChart;
