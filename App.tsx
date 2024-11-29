import React, { useEffect, useState } from "react";
import app from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import TemperatureChart from "./chartTemperatura"; // Gráfica de temperatura
import AccChart from "./AccChart"; // Gráfica de aceleración
import PressureAltitudeChart from "./PressureAltitudeChart"; // Gráfica combinada
import "./App.css"; // Estilos globales

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);

    const fetchData = () => {
      const databaseRef = ref(database);

      onValue(databaseRef, (snapshot) => {
        const databaseData = snapshot.val();

        if (databaseData) {
          // Filtrar las colecciones para excluir "MyCollection" y "Prueba"
          const filteredData = Object.entries(databaseData).filter(
            ([key]) => key !== "MyCollection" && key !== "Prueba" && key !== "ctm"
          );

          // Transformar en un formato para renderizar fácilmente
          const displayData = filteredData.map(([key, value]) => ({
            key,
            value: Object.values(value)[0], // Obtiene el primer valor dentro de la colección
          }));

          setData(displayData);
        }
      });
    };

    fetchData();
  }, []);

  // Función para manejar clics en los botones de dirección
  const handleDirectionClick = (direction) => {
    alert(`Moviéndose hacia ${direction}`);
  };

  return (
    <div className="container-lg">
      {/* Sistema de pestañas */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation" key="0">
          <button
            className="nav-link active"
            id="data-tab"
            data-bs-toggle="tab"
            data-bs-target="#data-tab-pane"
            type="button"
            role="tab"
            aria-controls="data-tab-pane"
            aria-selected="true"
          >
            Datos
          </button>
        </li>
        <li className="nav-item" role="presentation" key="1">
          <button
            className="nav-link"
            id="charts-tab"
            data-bs-toggle="tab"
            data-bs-target="#charts-tab-pane"
            type="button"
            role="tab"
            aria-controls="charts-tab-pane"
            aria-selected="false"
          >
            Gráficas
          </button>
        </li>
      </ul>

      {/* Contenido de las pestañas */}
      <div className="tab-content" id="myTabContent">
        {/* Pestaña de datos */}
        <div
          className="tab-pane fade show active"
          id="data-tab-pane"
          role="tabpanel"
          aria-labelledby="data-tab"
          tabIndex={0}
        >
          <h1 className="title-horizontal">📊 Sensores</h1>
          <div className="sensor-grid-horizontal">
            {data.map((item, index) => (
              <div key={index} className="sensor-card-horizontal">
                <h2 className="sensor-title-horizontal">{item.key}</h2>
                <p className="sensor-value-horizontal">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Botones de flechas debajo de los sensores */}
          <div className="controls-container-horizontal">
            <h2 className="controls-title-horizontal">Controles</h2>
            <button
              className="control-button-horizontal"
              onClick={() => handleDirectionClick("Adelante")}
            >
              ↑
            </button>
            <div className="control-buttons-row-horizontal">
              <button
                className="control-button-horizontal"
                onClick={() => handleDirectionClick("la izquierda")}
              >
                ←
              </button>
              <button
                className="control-button-horizontal"
                onClick={() => handleDirectionClick("la derecha")}
              >
                →
              </button>
            </div>
            <button
              className="control-button-horizontal"
              onClick={() => handleDirectionClick("atrás")}
            >
              ↓
            </button>
          </div>
        </div>

        {/* Pestaña de gráficas */}
        <div
          className="tab-pane fade"
          id="charts-tab-pane"
          role="tabpanel"
          aria-labelledby="charts-tab"
          tabIndex={0}
        >
          <h2 className="title-horizontal">Gráficas de Sensores</h2>
          <div className="row">
            <div className="col-md-6">
              <TemperatureChart /> {/* Gráfica de temperatura */}
            </div>
            <div className="col-md-6">
              <AccChart /> {/* Gráfica de aceleración */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <PressureAltitudeChart /> {/* Gráfica combinada */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
