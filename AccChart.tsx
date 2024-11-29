import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, TooltipItem, Legend } from 'chart.js';

// Registro de los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Función para generar datos ficticios de velocidad
const generateAccData = () => {
  const data = [];
  const now = new Date();

  // Genera 7 días de datos con velocidades aleatorias entre 30 y 120 km/h
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);

    data.push({
      date: date.toLocaleDateString(),
      speed: Math.floor(Math.random() * (120 - 30 + 1)) + 30, // Velocidad aleatoria entre 30 y 120 km/h
    });
  }

  return data;
};

const AccChart = () => {
  // Datos de la gráfica
  const AccData = generateAccData();

  // Preparando los datos para el gráfico
  const data = {
    labels: AccData.map(item => item.date), // Fechas
    datasets: [
      {
        label: 'Aceleración (km^2/h)',
        data: AccData.map(item => item.speed), // Velocidades
        fill: false,
        borderColor: 'rgba(255,99,132,1)', // Color de la línea
        tension: 0.1, // Curvatura de la línea
      },
    ],
  };

  // Opciones para personalizar el gráfico
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Historial de Aceleración ',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'line'>) {
            // Tooltip para mostrar la velocidad en km/h
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} km/h`;
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
      y: {
        title: {
          display: true,
          text: 'Aceleracion (km^2/h)',
        },
        min: 0,
        max: 130,
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de Aceleración</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AccChart;
