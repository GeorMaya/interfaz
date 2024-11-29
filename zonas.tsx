import React from 'react';
import Zona from './zona';

function App() {
  const zonas = [
    {
      num_zona: 1,
      descrip: 'Zona principal',
      estado: true,
      lastOn: 10,
      sensores: {
        temperatura: 25,
        aceleracion: 5.4,
        voltaje: 3.8,
        distancia: 45,
      },
    },
    {
      num_zona: 2,
      descrip: 'Zona secundaria',
      estado: false,
      lastOn: 20,
      sensores: {
        temperatura: 22,
        aceleracion: 4.1,
        voltaje: 4.2,
        distancia: 30,
      },
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '20px', padding: '20px' }}>
      {/* Contenedor principal de las zonas */}
      <div>
        <h2 style={{ textAlign: 'center' }}>Zonas</h2>
        <div className="row g-4">
          {zonas.map((zona, index) => (
            <div key={index} className="col-md-12">
              <Zona {...zona} />
            </div>
          ))}
        </div>
      </div>

      {/* Contenedor de botones a la derecha */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <h3>Controles</h3>
        <button
          style={{
            width: '60px',
            height: '60px',
            fontSize: '20px',
            border: '2px solid #007BFF',
            borderRadius: '50%',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          ↑
        </button>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            style={{
              width: '60px',
              height: '60px',
              fontSize: '20px',
              border: '2px solid #007BFF',
              borderRadius: '50%',
              backgroundColor: '#007BFF',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            ←
          </button>
          <button
            style={{
              width: '60px',
              height: '60px',
              fontSize: '20px',
              border: '2px solid #007BFF',
              borderRadius: '50%',
              backgroundColor: '#007BFF',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            →
          </button>
        </div>
        <button
          style={{
            width: '60px',
            height: '60px',
            fontSize: '20px',
            border: '2px solid #007BFF',
            borderRadius: '50%',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default App;
