
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

// Función para generar datos ficticios de temperatura
const generateTemperatureData = () => {
  const data = [];
  const now = new Date();
  
  // Genera 7 días de datos con temperaturas aleatorias entre 15 y 35 grados Celsius
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString(),
      temperature: Math.floor(Math.random() * (35 - 15 + 1)) + 15, // Temperatura aleatoria entre 15 y 35°C
    });
  }

  return data;
};

const TemperatureChart = () => {
  // Datos de la gráfica
  const temperatureData = generateTemperatureData();

  // Preparando los datos para el gráfico
  const data = {
    labels: temperatureData.map(item => item.date), // Fechas
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: temperatureData.map(item => item.temperature), // Temperaturas
        fill: false,
        borderColor: 'rgba(13,110,253,1)', // Color de la línea
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
        text: 'Historial de Temperaturas',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'line'>) {
            // Tooltip para mostrar la temperatura en °C
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} °C`;
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
          text: 'Temperatura (°C)',
        },
        min: 0,
        max: 40,
      },
    },
  };

  return (
    <div>
      <h2>Gráfico de Temperaturas</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Line data={data} options={options} />
      </div>
      
    </div>
  );
};

export default TemperatureChart;
